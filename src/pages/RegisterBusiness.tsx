import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Upload, 
  Check, 
  Loader2 
} from 'lucide-react';

const RegisterBusiness: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bhimavaram',
    state: 'Andhra Pradesh',
    businessType: '',
    description: '',
    licenseFile: null,
    idProofFile: null,
    agreeTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [fieldName]: e.target.files[0]
      });
    }
  };
  
  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };
  
  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Business Information</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="businessName" className="label">Business Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="input pl-10"
                    placeholder="Enter your business name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="ownerName" className="label">Owner's Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="input pl-10"
                    placeholder="Enter owner's full name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="label">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input pl-10"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input pl-10"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="businessType" className="label">Business Type</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  <option value="">Select business type</option>
                  <option value="pub">Pub</option>
                  <option value="bar">Bar</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Café</option>
                  <option value="club">Nightclub</option>
                  <option value="lounge">Lounge</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Location & Description</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="address" className="label">Business Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-light-muted" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input pl-10"
                    placeholder="Enter full address"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="label">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="input"
                    placeholder="City"
                    required
                    readOnly
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="label">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="input"
                    placeholder="State"
                    required
                    readOnly
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="label">Business Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input min-h-[120px]"
                  placeholder="Describe your business, specialties, ambiance, etc."
                  required
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Back
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Documents & Verification</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="licenseFile" className="label">Business License</label>
                <div className="border-2 border-dashed border-dark-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="licenseFile"
                    name="licenseFile"
                    onChange={(e) => handleFileChange(e, 'licenseFile')}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="licenseFile" className="cursor-pointer block">
                    <Upload className="h-10 w-10 text-light-muted mx-auto mb-2" />
                    <p className="text-light-muted mb-1">
                      {formData.licenseFile ? formData.licenseFile.name : 'Upload your business license'}
                    </p>
                    <p className="text-xs text-light-muted">PDF, JPG or PNG (Max 5MB)</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="mt-4 px-4 py-2 bg-dark-lighter text-light-muted rounded-lg hover:bg-dark-border transition-colors"
                    >
                      Browse Files
                    </motion.button>
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="idProofFile" className="label">ID Proof</label>
                <div className="border-2 border-dashed border-dark-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="idProofFile"
                    name="idProofFile"
                    onChange={(e) => handleFileChange(e, 'idProofFile')}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="idProofFile" className="cursor-pointer block">
                    <FileText className="h-10 w-10 text-light-muted mx-auto mb-2" />
                    <p className="text-light-muted mb-1">
                      {formData.idProofFile ? formData.idProofFile.name : 'Upload your ID proof'}
                    </p>
                    <p className="text-xs text-light-muted">PDF, JPG or PNG (Max 5MB)</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="mt-4 px-4 py-2 bg-dark-lighter text-light-muted rounded-lg hover:bg-dark-border transition-colors"
                    >
                      Browse Files
                    </motion.button>
                  </label>
                </div>
              </div>
              
              <div className="flex items-start mt-6">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label htmlFor="agreeTerms" className="text-light-muted text-sm">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>. I confirm that all information provided is accurate and complete.
                </label>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Back
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary flex items-center"
                disabled={isSubmitting || !formData.agreeTerms}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Submitting...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </motion.button>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };
  
  if (isSuccess) {
    return (
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-dark-card p-8 rounded-xl border border-dark-border text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="h-10 w-10 text-primary" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Registration Successful!</h2>
          
          <p className="text-light-muted mb-8">
            Thank you for registering your business with SKHUB. We've received your information and will review it shortly. You'll receive a confirmation email at {formData.email} with further instructions.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="btn-primary inline-block">
              Back to Home
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Register Your <span className="text-primary">Business</span> on SKHUB
          </h1>
          <p className="text-light-muted max-w-2xl mx-auto">
            Join Bhimavaram's premier nightlife platform and connect with thousands of potential customers. Complete the form below to get started.
          </p>
        </motion.div>
        
        <div className="bg-dark-card rounded-xl border border-dark-border p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    formStep >= step ? 'bg-primary text-white' : 'bg-dark-lighter text-light-muted'
                  }`}
                >
                  {step}
                </div>
                <span className={`text-xs mt-2 ${formStep >= step ? 'text-white' : 'text-light-muted'}`}>
                  {step === 1 ? 'Business Info' : step === 2 ? 'Location' : 'Documents'}
                </span>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit}>
            {renderFormStep()}
          </form>
        </div>
        
        <div className="text-center text-light-muted text-sm">
          Already registered? <a href="/login" className="text-primary hover:underline">Login to your account</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;