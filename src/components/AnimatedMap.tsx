import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Phone, Globe, Clock, Loader2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { toast } from 'react-toastify';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Venue {
  id: string;
  name: string;
  type: 'bar' | 'restaurant' | 'club' | 'lounge';
  position: { x: number; y: number };
  rating: number;
  description: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  location: {
    lat: number;
    lng: number;
  };
  features: string[];
  priceRange: string;
  cuisine?: string;
}

const venues: Venue[] = [
  {
    id: '1',
    name: 'The Neon Lounge',
    type: 'lounge',
    position: { x: 30, y: 40 },
    rating: 4.5,
    description: 'Premium lounge with signature cocktails and live music performances.',
    address: 'J.P. Road, Near Clock Tower, Bhimavaram',
    phone: 'XXXX-XXXX-XX',
    website: 'https://neonlounge.com',
    hours: '4:00 PM - 11:00 PM',
    location: {
      lat: 16.5435,
      lng: 81.5217
    },
    features: ['Live Music', 'Cocktail Bar', 'VIP Seating', 'Outdoor Area'],
    priceRange: '₹₹₹',
    cuisine: 'Continental'
  },
  {
    id: '2',
    name: 'Spice Garden Restaurant',
    type: 'restaurant',
    position: { x: 60, y: 30 },
    rating: 4.8,
    description: 'Authentic multi-cuisine restaurant with traditional ambiance.',
    address: 'Market Center, Bhimavaram',
    phone: 'XXXX-XXXX-XX',
    website: 'https://spicegarden.com',
    hours: '11:00 AM - 11:00 PM',
    location: {
      lat: 16.5445,
      lng: 81.5227
    },
    features: ['Family Dining', 'Private Rooms', 'Buffet', 'Live Kitchen'],
    priceRange: '₹₹',
    cuisine: 'Multi-cuisine'
  },
  {
    id: '3',
    name: 'Club Velocity',
    type: 'club',
    position: { x: 45, y: 55 },
    rating: 4.6,
    description: 'High-energy nightclub with top DJs and premium beverages.',
    address: 'Ring Road, Bhimavaram',
    phone: 'XXXX-XXXX-XX',
    website: 'https://clubvelocity.com',
    hours: '7:00 PM - 1:00 AM',
    location: {
      lat: 16.5455,
      lng: 81.5237
    },
    features: ['DJ Nights', 'Dance Floor', 'VIP Tables', 'Premium Bar'],
    priceRange: '₹₹₹₹'
  },
  {
    id: '4',
    name: 'Riverside Brewery',
    type: 'bar',
    position: { x: 70, y: 45 },
    rating: 4.4,
    description: 'Craft beer destination with riverside views and pub food.',
    address: 'Godavari Bank, Bhimavaram',
    phone: 'XXXX-XXXX-XX',
    website: 'https://riversidebrewery.com',
    hours: '12:00 PM - 11:30 PM',
    location: {
      lat: 16.5465,
      lng: 81.5247
    },
    features: ['Craft Beer', 'Live Sports', 'River View', 'Bar Food'],
    priceRange: '₹₹',
    cuisine: 'Pub Food'
  },
  {
    id: '5',
    name: 'Royal Kitchen',
    type: 'restaurant',
    position: { x: 35, y: 65 },
    rating: 4.7,
    description: 'Fine dining restaurant specializing in royal Indian cuisine.',
    address: 'College Road, Bhimavaram',
    phone: 'XXXX-XXXX-XX',
    website: 'https://royalkitchen.com',
    hours: '11:30 AM - 11:00 PM',
    location: {
      lat: 16.5475,
      lng: 81.5257
    },
    features: ['Fine Dining', 'Private Dining', 'Valet Parking', 'Live Music'],
    priceRange: '₹₹₹',
    cuisine: 'North Indian'
  },
  {
    id: '6',
    name: 'Skyline Bar & Grill',
    type: 'bar',
    position: { x: 55, y: 35 },
    rating: 4.3,
    description: 'Rooftop bar with panoramic city views and international cuisine.',
    address: 'Main Road, Bhimavaram',
    phone: 'XXXX-XXXX-XX',
    website: 'https://skylinebargrill.com',
    hours: '5:00 PM - 11:30 PM',
    location: {
      lat: 16.5440,
      lng: 81.5220
    },
    features: ['Rooftop Seating', 'Live Music', 'International Cuisine', 'Cocktail Bar'],
    priceRange: '₹₹₹',
    cuisine: 'International'
  }
];

const AnimatedMap: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [hoveredVenue, setHoveredVenue] = useState<string | null>(null);
  const [showFullMap, setShowFullMap] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = async (venue: Venue) => {
    if (!selectedVenue) return;
    
    setIsBooking(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success(`Table booked at ${venue.name}!`);
      setSelectedVenue(null);
      setShowFullMap(false);
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    } finally {
      setIsBooking(false);
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'bar': return 'bg-accent-blue';
      case 'restaurant': return 'bg-accent-yellow';
      case 'club': return 'bg-accent-pink';
      case 'lounge': return 'bg-accent-purple';
      default: return 'bg-primary';
    }
  };

  const handleViewDetails = useCallback((venue: Venue) => {
    setSelectedVenue(venue);
    setShowFullMap(true);
  }, []);

  return (
    <div className="w-full bg-dark-lighter rounded-xl overflow-hidden border border-dark-border">
      <div className="h-[500px] relative">
        <MapContainer
          center={[16.5450, 81.5230]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {venues.map((venue) => (
            <Marker
              key={venue.id}
              position={[venue.location.lat, venue.location.lng]}
              eventHandlers={{
                click: () => setSelectedVenue(venue),
              }}
            >
              <Popup>
                <div className="text-dark p-2">
                  <h3 className="font-semibold">{venue.name}</h3>
                  <p className="text-sm">{venue.address}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-accent-yellow fill-accent-yellow" />
                    <span className="ml-1">{venue.rating}</span>
                  </div>
                  <button
                    onClick={() => handleViewDetails(venue)}
                    className="mt-2 text-primary hover:text-primary-hover text-sm"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="max-h-[300px] overflow-y-auto p-4 bg-dark-card border-t border-dark-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-lighter p-4 rounded-lg cursor-pointer"
              onClick={() => setSelectedVenue(venue)}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-medium">{venue.name}</h4>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-accent-yellow fill-accent-yellow mr-1" />
                  <span className="text-white">{venue.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-light-muted mb-2">
                <div className={`w-2 h-2 rounded-full ${getMarkerColor(venue.type)} mr-2`}></div>
                <span className="capitalize">{venue.type}</span>
              </div>
              <p className="text-light-muted text-sm mb-2 line-clamp-2">{venue.description}</p>
              <div className="flex items-center text-sm text-light-muted">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="truncate">{venue.address}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedVenue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/80 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-card rounded-xl p-6 max-w-4xl w-full relative"
            >
              <button 
                className="absolute top-4 right-4 text-light-muted hover:text-white"
                onClick={() => {
                  if (!isBooking) {
                    setSelectedVenue(null);
                    setShowFullMap(false);
                  }
                }}
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">{selectedVenue.name}</h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${getMarkerColor(selectedVenue.type)} mr-2`}></div>
                        <span className="text-light-muted capitalize">{selectedVenue.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-yellow fill-accent-yellow mr-1" />
                        <span className="text-white">{selectedVenue.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-light-muted">{selectedVenue.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-2 mt-1" />
                      <span className="text-light-muted">{selectedVenue.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-2" />
                      <span className="text-light-muted">{selectedVenue.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-primary mr-2" />
                      <a href={selectedVenue.website} target="_blank" rel="noopener noreferrer" 
                         className="text-primary hover:text-primary-hover">
                        Visit Website
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      <span className="text-light-muted">{selectedVenue.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedVenue.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-dark-lighter text-light-muted px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full flex items-center justify-center"
                    onClick={() => handleBooking(selectedVenue)}
                    disabled={isBooking}
                  >
                    {isBooking ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Booking...
                      </>
                    ) : (
                      'Book Now'
                    )}
                  </motion.button>
                </div>

                <div className="h-[400px] rounded-lg overflow-hidden">
                  <MapContainer
                    center={[selectedVenue.location.lat, selectedVenue.location.lng]}
                    zoom={16}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[selectedVenue.location.lat, selectedVenue.location.lng]}>
                      <Popup>
                        <div className="text-dark">
                          <strong>{selectedVenue.name}</strong>
                          <br />
                          {selectedVenue.address}
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedMap;