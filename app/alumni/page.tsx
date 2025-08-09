'use client';

import React, { useState, useEffect } from 'react';
import AlumniCard, { AlumniMember } from '@/components/AlumniCard';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Building, Filter, X, ChevronDown, Search } from 'lucide-react';

interface ApiResponse {
  success: boolean;
  data: AlumniMember[];
  count: number;
}

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<AlumniMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  useEffect(() => {
    fetchAlumniData();
  }, []);

  const fetchAlumniData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/alumni');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse = await response.json();
      
      if (result.success) {
        setAlumni(result.data);
      } else {
        throw new Error('Failed to fetch alumni data');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching alumni data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique values for filtering
  const batches = [...new Set(alumni.map(member => member.Batch))].sort();
  const companies = [...new Set(alumni.map(member => member.Institute))].sort();
  const positions = [...new Set(alumni.map(member => member.Position))].sort();
  const countries = [...new Set(alumni.map(member => member.Country).filter(Boolean))].sort();
  
  // Filter alumni by all selected criteria including search
  const filteredAlumni = alumni.filter(member => {
    const batchMatch = selectedBatch === 'all' || member.Batch === selectedBatch;
    const companyMatch = selectedCompany === 'all' || member.Institute === selectedCompany;
    const positionMatch = selectedPosition === 'all' || member.Position === selectedPosition;
    const countryMatch = selectedCountry === 'all' || member.Country === selectedCountry;
    
    // Search functionality - search in name and company (institute)
    const searchMatch = searchQuery === '' || 
      member.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.Institute.toLowerCase().includes(searchQuery.toLowerCase());
    
    return batchMatch && companyMatch && positionMatch && countryMatch && searchMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);
  const startIndex = 0;
  const endIndex = currentPage * itemsPerPage;
  const paginatedAlumni = filteredAlumni.slice(startIndex, endIndex);
  const hasMoreAlumni = endIndex < filteredAlumni.length;

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBatch, selectedCompany, selectedPosition, selectedCountry, searchQuery]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedBatch('all');
    setSelectedCompany('all');
    setSelectedPosition('all');
    setSelectedCountry('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Load more alumni
  const loadMoreAlumni = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Check if any filters are active
  const hasActiveFilters = selectedBatch !== 'all' || selectedCompany !== 'all' || selectedPosition !== 'all' || selectedCountry !== 'all' || searchQuery !== '';

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" suppressHydrationWarning={true}>
        <div className="text-center" suppressHydrationWarning={true}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" suppressHydrationWarning={true}></div>
          <p className="text-gray-600">Loading alumni data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Alumni Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchAlumniData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              EEE Alumni Portal
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with our distinguished graduates from the Department of EEE
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span className="text-lg font-semibold">{alumni.length} Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                <span className="text-lg font-semibold">{batches.length} Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-6 h-6" />
                <span className="text-lg font-semibold">{new Set(alumni.map(a => a.Institute)).size} Organizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Search & Filter Alumni</h3>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="ml-auto flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>
          
          {/* Search Bar */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search by Name or Workplace</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search alumni by name or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Batch Filter Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Batch</label>
              <div className="relative">
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="all">All Batches ({alumni.length})</option>
                  {batches.map(batch => {
                    const count = alumni.filter(member => member.Batch === batch).length;
                    return (
                      <option key={batch} value={batch}>
                        Batch {batch} ({count})
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Company Filter Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Workplace</label>
              <div className="relative">
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                >
                  <option value="all">All Workplaces ({new Set(alumni.map(a => a.Institute)).size})</option>
                  {companies.map(company => {
                    const count = alumni.filter(member => member.Institute === company).length;
                    return (
                      <option key={company} value={company}>
                        {company} ({count})
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Position Filter Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Position</label>
              <div className="relative">
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                  <option value="all">All Positions ({new Set(alumni.map(a => a.Position)).size})</option>
                  {positions.map(position => {
                    const count = alumni.filter(member => member.Position === position).length;
                    return (
                      <option key={position} value={position}>
                        {position} ({count})
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Country Filter Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Country</label>
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="all">All Countries ({countries.length})</option>
                  {countries.map(country => {
                    const count = alumni.filter(member => member.Country === country).length;
                    return (
                      <option key={country} value={country}>
                        {country} ({count})
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-3">
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedBatch !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Batch: {selectedBatch}
                    <button onClick={() => setSelectedBatch('all')} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedCompany !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Company: {selectedCompany}
                    <button onClick={() => setSelectedCompany('all')} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedPosition !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Position: {selectedPosition}
                    <button onClick={() => setSelectedPosition('all')} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedCountry !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Country: {selectedCountry}
                    <button onClick={() => setSelectedCountry('all')} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600">
                Showing {filteredAlumni.length} of {alumni.length} alumni
                {selectedBatch !== 'all' && ` • Batch: ${selectedBatch}`}
                {selectedCompany !== 'all' && ` • Company: ${selectedCompany}`}
                {selectedPosition !== 'all' && ` • Position: ${selectedPosition}`}
                {selectedCountry !== 'all' && ` • Country: ${selectedCountry}`}
              </p>
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{paginatedAlumni.length}</span> of <span className="font-semibold text-gray-900">{filteredAlumni.length}</span> alumni
              {hasActiveFilters && (
                <span className="text-sm text-gray-500 ml-2">
                  (filtered from {alumni.length} total)
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Alumni Grid */}
        {filteredAlumni.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedAlumni.map((member, index) => (
                <AlumniCard key={`${member.Name}-${index}`} alumni={member} />
              ))}
            </div>
            
            {/* View More Button */}
            {hasMoreAlumni && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMoreAlumni}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                >
                  View More Alumni ({filteredAlumni.length - paginatedAlumni.length} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No alumni found
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery ? 
                `No alumni match your search for "${searchQuery}"` : 
                'No alumni match your current filters'
              }
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}