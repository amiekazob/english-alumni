'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Mail, Building, Phone, MapPin, Linkedin, Facebook, Instagram, Camera } from 'lucide-react';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    position: '',
    institute: '',
    email: '',
    phone: '',
    currentAddress: '',
    photo: null as File | null,
    linkedin: '',
    facebook: '',
    instagram: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        e.target.value = '';
        return;
      }
      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        e.target.value = '';
        return;
      }
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Registration submitted successfully!');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      batch: '',
      position: '',
      institute: '',
      email: '',
      phone: '',
      currentAddress: '',
      photo: null,
      linkedin: '',
      facebook: '',
      instagram: ''
    });
    
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Alumni Registration
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our alumni network and stay connected with the Department of EEE community at the University of Asia Pacific.
            </p>
          </div>

          {/* Registration Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">
                Registration Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-blue-500" />
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-green-500" />
                      Batch *
                    </label>
                    <Input
                      type="text"
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      placeholder="e.g., 1st, 2nd, 3rd"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-purple-500" />
                      Current Position *
                    </label>
                    <Input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Your current job title"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 mr-2 text-orange-500" />
                      Institute/Company/Workplace *
                    </label>
                    <Input
                      type="text"
                      name="institute"
                      value={formData.institute}
                      onChange={handleInputChange}
                      placeholder="Your current workplace"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-red-500" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-green-600" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+880 1XXX-XXXXXX"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    Current Address *
                  </label>
                  <textarea
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your current address"
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Camera className="w-4 h-4 mr-2 text-pink-500" />
                    Photo Upload (Optional, Max 10MB)
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {formData.photo && (
                    <p className="text-sm text-green-600">
                      Selected: {formData.photo.name} ({(formData.photo.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Social Media Links (Optional)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                        LinkedIn Profile
                      </label>
                      <Input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Facebook className="w-4 h-4 mr-2 text-blue-800" />
                        Facebook Profile
                      </label>
                      <Input
                        type="url"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                        placeholder="https://facebook.com/yourprofile"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Instagram className="w-4 h-4 mr-2 text-pink-600" />
                        Instagram Profile
                      </label>
                      <Input
                        type="url"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        placeholder="https://instagram.com/yourprofile"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Submit Registration'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need help? Contact us at{' '}
              <a href="mailto:alumni@uap-bd.edu" className="text-blue-600 hover:text-blue-800 font-medium">
                alumni-eee@uap-bd.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}