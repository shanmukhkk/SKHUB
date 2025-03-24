import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  Users, 
  Filter, 
  MapPin, 
  Star, 
  Utensils, 
  Music, 
  Wine, 
  Check, 
  Loader2 
} from 'lucide-react';

interface Venue {
  id: string;
  name: string;
  type: string;
  location: string;
  rating: number;
  image: string;
  cuisine?: string;
  priceRange: string;
  features: string[];
}

const BookTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [partySize, setPartySize] = useState('2');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    rating: 'all',
    features: [] as string[]
  });
  
  const venues: Venue[] = [
    {
      id: '1',
      name: 'The Neon Lounge',
      type: 'bar',
      location: 'Central Bhimavaram',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      cuisine: 'Fusion',
      priceRange: '₹₹',
      features: ['Live Music', 'Outdoor Seating', 'Cocktails']
    },
    {
      id: '2',
      name: 'Spice Garden',
      type: 'restaurant',
      location: 'North Bhimavaram',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      cuisine: 'Indian',
      priceRange: '₹₹₹',
      features: ['Fine Dining', 'Vegetarian Options', 'Private Rooms']
    },
    {
      id: '3',
      name: 'Pulse Nightclub',
      type: 'club',
      location: 'Downtown Bhimavaram',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      priceRange: '₹₹₹₹',
      features: ['DJ', 'Dance Floor', 'VIP Tables']
    },
    {
      id: '4',
      name: 'Riverside Brewery',
      type: 'bar',
      location: 'Riverside, Bhimavaram',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      cuisine: 'Pub Food',
      priceRange: '₹₹',
      features: ['Craft Beer', 'Sports Screening', 'Outdoor Seating']
    },
    {
      id: '5',
      name: 'Fusion Bites',
      type: 'restaurant',
      location: 'East Bhimavaram',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      cuisine: 'Fusion',
      priceRange: '₹₹₹',
      features: ['Rooftop', 'Cocktails', 'Live Music']
    },
    {
      id: '6',
      name: 'Sky Lounge',
      type: 'lounge',
      location: 'Central Bhimavaram',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      cuisine: 'International',
      priceRange: '₹₹₹₹',
      features: ['Rooftop', 'Cocktails', 'Scenic View']
    }
  ];
  
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  const handleFeatureToggle = (feature: string) => {
    const updatedFeatures = [...filters.features];
    if (updatedFeatures.includes(feature)) {
      const index = updatedFeatures.indexOf(feature);
      updatedFeatures.splice(index, 1);
    } else {
      updatedFeatures.push(feature);
    }
    setFilters({
      ...filters,
      features: updatedFeatures
    });
  };
  
  const filteredVenues = venues.filter(venue => {
    // Search query filter
    if (searchQuery && !venue.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !venue.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Type filter
    if (filters.type !== 'all' && venue.type !== filters.type) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange !== 'all' && venue.priceRange !== filters.priceRange) {
      return false;
    }
    
    // Rating filter
    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      if (venue.rating < minRating) {
        return false;
      }
    }
    
    // Features filter
    if (filters.features.length > 0) {
      for (const feature of filters.features) {
        if (!venue.features.includes(feature)) {
          return false;
        }
      }
    }
    
    return true;
  });
  
  const handleBookTable = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your booking.');
      return;
    }
    
    setIsBooking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSelectedVenue(null);
        setBookingSuccess(false);
        setSelectedDate('');
        setSelectedTime('');
        setPartySize('2');
      }, 3000);
    }, 2000);
  };
  
  const getVenueTypeIcon = (type: string) => {
    switch (type) {
      case 'bar':
        return <Wine className="h-5 w-5 text-accent-blue" />;
      case 'restaurant':
        return <Utensils className="h-5 w-5 text-accent-yellow" />;
      case 'club':
        return <Music className="h-5 w-5 text-accent-pink" />;
      case 'lounge':
        return <Users className="h-5 w-5 text-accent-purple" />;
      default:
        return <Utensils className="h-5 w-5 text-primary" />;
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark-lighter opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Book a <span className="text-primary">Table</span>
            </h1>
            <p className="text-xl text-light-muted mb-8">
              Find and book tables at the best pubs, restaurants, and nightclubs in Bhimavaram. No more waiting in lines or making phone calls.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Search & Filter Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-dark-card rounded-xl border border-dark-border p-6 md:p-8 -mt-20 relative z-20 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label htmlFor="search" className="label">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <input
                    type="text"
                    id="search"
                    placeholder="Venue name or location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="label">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input pl-10"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="time" className="label">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <select
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="input pl-10"
                  >
                    <option value="">Select time</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="23:00">11:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="partySize" className="label">Party Size</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <select
                    id="partySize"
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="input pl-10"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9">9 People</option>
                    <option value="10">10+ People</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-light-muted hover:text-white transition-colors"
              >
                <Filter className="h-5 w-5 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Search
              </motion.button>
            </div>
            
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-dark-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-white font-medium mb-3">Venue Type</h3>
                    <div className="space-y-2">
                      {['all', 'restaurant', 'bar', 'club', 'lounge'].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="venueType"
                            checked={filters.type === type}
                            onChange={() => handleFilterChange('type', type)}
                            className="mr-2"
                          />
                          <span className="text-light-muted capitalize">
                            {type === 'all' ? 'All Types' : type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {['all', '₹', '₹₹', '₹₹₹', '₹₹₹₹'].map((price) => (
                        <label key={price} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="priceRange"
                            checked={filters.priceRange === price}
                            onChange={() => handleFilterChange('priceRange', price)}
                            className="mr-2"
                          />
                          <span className="text-light-muted">
                            {price === 'all' ? 'All Prices' : price}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-3">Rating</h3>
                    <div className="space-y-2">
                      {['all', '3', '3.5', '4', '4.5'].map((rating) => (
                        <label key={rating} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="rating"
                            checked={filters.rating === rating}
                            onChange={() => handleFilterChange('rating', rating)}
                            className="mr-2"
                          />
                          <span className="text-light-muted">
                            {rating === 'all' ? 'Any Rating' : `${rating}+ Stars`}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-white font-medium mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Live Music', 'Outdoor Seating', 'Cocktails', 'Fine Dining', 'Vegetarian Options', 'Private Rooms', 'Rooftop', 'Sports Screening', 'DJ', 'Dance Floor', 'Craft Beer', 'Scenic View'].map((feature) => (
                      <label
                        key={feature}
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                          filters.features.includes(feature)
                            ? 'bg-primary text-white'
                            : 'bg-dark-lighter text-light-muted hover:bg-dark -border hover:text-white'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={filters.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="hidden"
                        />
                        {feature}
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Venues Section */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-8">
            {filteredVenues.length > 0 
              ? `${filteredVenues.length} Venues Available` 
              : 'No Venues Found'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-dark-card rounded-xl overflow-hidden border border-dark-border"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{venue.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-accent-yellow fill-accent-yellow mr-1" />
                      <span className="text-white">{venue.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {getVenueTypeIcon(venue.type)}
                      <span className="text-light-muted text-sm ml-1 capitalize">{venue.type}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-light-muted mr-1" />
                      <span className="text-light-muted text-sm">{venue.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-light-muted text-sm">{venue.cuisine || venue.type}</span>
                    <span className="text-primary font-medium">{venue.priceRange}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.features.slice(0, 3).map((feature, index) => (
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
                    className="btn-primary w-full"
                    onClick={() => setSelectedVenue(venue)}
                  >
                    Book a Table
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredVenues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-light-muted mb-4">No venues match your current filters. Try adjusting your search criteria.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
                onClick={() => {
                  setSearchQuery('');
                  setFilters({
                    type: 'all',
                    priceRange: 'all',
                    rating: 'all',
                    features: []
                  });
                }}
              >
                Reset Filters
              </motion.button>
            </div>
          )}
        </div>
      </section>
      
      {/* Booking Modal */}
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
            className="bg-dark-card rounded-xl p-6 max-w-md w-full relative"
          >
            <button 
              className="absolute top-4 right-4 text-light-muted hover:text-white"
              onClick={() => {
                if (!isBooking) {
                  setSelectedVenue(null);
                  setBookingSuccess(false);
                }
              }}
            >
              ✕
            </button>
            
            {bookingSuccess ? (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="h-10 w-10 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2">Booking Confirmed!</h3>
                <p className="text-light-muted mb-6">
                  Your table at {selectedVenue.name} has been booked for {selectedDate} at {selectedTime} for {partySize} {parseInt(partySize) === 1 ? 'person' : 'people'}.
                </p>
                <p className="text-light-muted text-sm">
                  A confirmation has been sent to your email. You can manage your booking in your account.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center mb-6">
                  <img 
                    src={selectedVenue.image} 
                    alt={selectedVenue.name} 
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{selectedVenue.name}</h3>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-light-muted mr-1" />
                      <span className="text-light-muted text-sm">{selectedVenue.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="modal-date" className="label">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                      <input
                        type="date"
                        id="modal-date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="input pl-10"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="modal-time" className="label">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                      <select
                        id="modal-time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="input pl-10"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                        <option value="22:30">10:30 PM</option>
                        <option value="23:00">11:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="modal-party-size" className="label">Party Size</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                      <select
                        id="modal-party-size"
                        value={partySize}
                        onChange={(e) => setPartySize(e.target.value)}
                        className="input pl-10"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7">7 People</option>
                        <option value="8">8 People</option>
                        <option value="9">9 People</option>
                        <option value="10">10+ People</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="special-requests" className="label">Special Requests (Optional)</label>
                    <textarea
                      id="special-requests"
                      className="input min-h-[80px]"
                      placeholder="Any special requests or preferences?"
                    ></textarea>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center"
                  onClick={handleBookTable}
                  disabled={isBooking}
                >
                  {isBooking ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Booking...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </motion.button>
                
                <p className="text-light-muted text-xs text-center mt-4">
                  By confirming, you agree to our booking terms and cancellation policy.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
      
      {/* Popular Venues Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular <span className="text-primary">Venues</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Discover the most popular pubs, restaurants, and nightclubs in Bhimavaram based on customer ratings and bookings.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.slice(0, 3).map((venue) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-dark-card rounded-xl overflow-hidden border border-dark-border"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{venue.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-accent-yellow fill-accent-yellow mr-1" />
                      <span className="text-white">{venue.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {getVenueTypeIcon(venue.type)}
                      <span className="text-light-muted text-sm ml-1 capitalize">{venue.type}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-light-muted mr-1" />
                      <span className="text-light-muted text-sm">{venue.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.features.slice(0, 3).map((feature, index) => (
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
                    className="btn-primary w-full"
                    onClick={() => setSelectedVenue(venue)}
                  >
                    Book a Table
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-dark-card to-dark-lighter p-8 md:p-12 rounded-2xl border border-dark-border text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Own a <span className="text-primary">Venue</span>?
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto mb-8">
              Register your pub, restaurant, or nightclub on SKHUB and reach thousands of potential customers. Our platform makes it easy to manage bookings and grow your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="/register" className="btn-primary">
                Register Your Business
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookTable;