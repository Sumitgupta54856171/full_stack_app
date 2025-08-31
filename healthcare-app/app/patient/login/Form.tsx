'use client'
import React, { useState, useEffect } from 'react';

interface LoginFormProps {}

const Form: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [passcode, setPasscode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black mr-4">Razor</h1>
          <div className="flex items-center text-sm text-gray-600">
            <span>Sales@Razor.uk</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <button className="text-gray-700 hover:text-black transition-colors">Sign up</button>
          <button className="bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
            Request Demo
          </button>
        </div>
      </div>

      {/* Background Hospital Management Elements */}
      <div className="absolute inset-0">
        {/* Medical Equipment - Left side */}
        <div className="absolute top-32 left-16 transform -rotate-12">
          <div className="w-20 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-lg animate-pulse">
            <div className="w-full h-8 bg-blue-100 rounded-t-lg flex items-center justify-center">
              <div className="w-12 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="p-2 space-y-1">
              <div className="w-full h-2 bg-blue-200 rounded"></div>
              <div className="w-3/4 h-2 bg-blue-200 rounded"></div>
              <div className="w-1/2 h-2 bg-blue-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Hospital Cross Pattern - left */}
        <div className="absolute bottom-40 left-24 w-16 h-20 animate-bounce">
          <div className="grid grid-cols-4 grid-rows-5 gap-1">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${
                [1, 2, 5, 6, 8, 9, 10, 11, 13, 14, 17, 18].includes(i) 
                  ? 'bg-red-400' 
                  : 'bg-transparent'
              }`}></div>
            ))}
          </div>
        </div>

        {/* EKG/Heart Rate Line - left */}
        <div className="absolute top-72 left-32">
          <svg width="120" height="60" viewBox="0 0 120 60" className="animate-pulse">
            <path d="M0,30 L20,30 L25,10 L30,50 L35,15 L40,45 L45,30 L120,30" 
                  stroke="#10B981" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        {/* Medical Staff Illustration - Right side */}
        <div className="absolute top-48 right-32 transform scale-110">
          <div className="relative w-48 h-64">
            {/* Doctor/Nurse */}
            <div className="absolute top-8 left-16">
              {/* Head with medical cap */}
              <div className="w-12 h-12 bg-blue-900 rounded-full mb-2 relative">
                <div className="absolute -top-1 left-1 w-10 h-4 bg-white rounded-full"></div>
                <div className="absolute top-1 left-3 w-6 h-2 bg-red-500 rounded-full"></div>
              </div>
              {/* Medical coat */}
              <div className="w-16 h-20 bg-white border-2 border-blue-200 rounded-t-2xl relative">
                <div className="absolute top-2 left-2 w-3 h-8 bg-blue-500 rounded"></div>
                <div className="absolute top-2 right-2 w-3 h-8 bg-blue-500 rounded"></div>
                <div className="absolute bottom-2 left-4 w-8 h-2 bg-blue-300 rounded"></div>
              </div>
              {/* Legs */}
              <div className="flex space-x-2 mt-1">
                <div className="w-6 h-16 bg-blue-800 rounded-full"></div>
                <div className="w-6 h-16 bg-blue-800 rounded-full"></div>
              </div>
              {/* Medical shoes */}
              <div className="flex space-x-2 -mt-2">
                <div className="w-8 h-4 bg-white rounded-full border border-blue-300"></div>
                <div className="w-8 h-4 bg-white rounded-full border border-blue-300"></div>
              </div>
            </div>
            
            {/* Medical Computer/Monitor */}
            <div className="absolute bottom-16 left-8">
              <div className="w-20 h-12 bg-white border-2 border-blue-300 rounded-lg shadow-lg">
                <div className="w-16 h-8 bg-blue-100 m-2 rounded flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" className="text-green-500">
                    <path d="M0,4 L2,4 L3,2 L4,6 L5,1 L6,5 L7,4 L12,4" 
                          stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Chart/Clipboard - right */}
        <div className="absolute top-56 right-16">
          <div className="w-20 h-24 bg-white border-2 border-green-300 rounded-lg shadow-lg animate-pulse">
            <div className="p-2 space-y-2">
              <div className="w-full h-2 bg-green-200 rounded"></div>
              <div className="w-full h-1 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
              <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
              <div className="flex space-x-1 mt-2">
                <div className="w-3 h-3 border border-green-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-3 border border-green-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Building Icon - right */}
        <div className="absolute bottom-32 right-24 w-16 h-20 animate-bounce">
          <div className="w-16 h-16 bg-white border-2 border-blue-400 rounded-lg shadow-lg">
            <div className="p-1">
              <div className="w-full h-3 bg-blue-200 rounded-t"></div>
              <div className="grid grid-cols-3 gap-1 mt-1">
                {Array.from({length: 9}).map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-blue-100 rounded-sm"></div>
                ))}
              </div>
            </div>
            {/* Hospital cross on building */}
            <div className="absolute top-2 right-2 w-4 h-4">
              <div className="absolute top-1 left-1.5 w-1 h-2 bg-red-500 rounded"></div>
              <div className="absolute top-1.5 left-0.5 w-3 h-1 bg-red-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Medical Pills/Capsules */}
        <div className="absolute top-96 left-1/4">
          <div className="flex space-x-2 animate-pulse">
            <div className="w-4 h-6 bg-gradient-to-b from-red-400 to-white rounded-full"></div>
            <div className="w-4 h-6 bg-gradient-to-b from-blue-400 to-white rounded-full"></div>
            <div className="w-4 h-6 bg-gradient-to-b from-green-400 to-white rounded-full"></div>
          </div>
        </div>

        {/* Stethoscope curve */}
        <div className="absolute top-32 right-48">
          <svg width="80" height="60" viewBox="0 0 80 60" className="animate-pulse">
            <path d="M10,10 Q40,0 70,30 Q75,35 70,40 Q65,45 60,40" 
                  stroke="#6B7280" strokeWidth="3" fill="none"/>
            <circle cx="70" cy="35" r="4" fill="#6B7280"/>
            <circle cx="10" cy="10" r="3" fill="#6B7280"/>
          </svg>
        </div>

        {/* Medical ID Badge */}
        <div className="absolute bottom-48 left-1/3">
          <div className="w-8 h-10 bg-white border border-blue-300 rounded shadow-lg animate-bounce">
            <div className="w-full h-3 bg-blue-200 rounded-t"></div>
            <div className="p-1 space-y-0.5">
              <div className="w-full h-0.5 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-0.5 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-0.5 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Medical symbols floating */}
        <div className="absolute top-56 left-1/3 w-6 h-6 text-blue-400 animate-ping">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2v6h6v4h-6v6H6v-6H0V8h6V2h4z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-64 right-1/3 w-4 h-4 text-green-500 animate-pulse">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
          </svg>
        </div>
      </div>

      {/* Main Login Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] relative z-20">
        <div 
          className={`bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4 transform transition-all duration-700 ${
            showForm ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Agent Login</h2>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Hey, Enter your details to get sign in<br />
              to your account
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email / Phone No"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 outline-none placeholder-gray-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Passcode Field */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Passcode"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 outline-none placeholder-gray-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm hover:text-gray-800 transition-colors"
                >
                  Hide
                </button>
              </div>
            </div>

            {/* Trouble signing in */}
            <div className="text-left">
              <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Having trouble in sign in?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-black transition-all duration-300 ${
                isLoading 
                  ? 'bg-orange-300 cursor-not-allowed' 
                  : 'bg-orange-400 hover:bg-orange-500 hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>

          {/* Social Login */}
          <div className="mt-8">
            <div className="flex items-center justify-center mb-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="px-4 text-sm text-gray-600">Or Sign in with</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <div className="flex justify-center space-x-4">
              {/* Google */}
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg font-bold text-red-500 mr-2">G</span>
                <span className="text-sm text-gray-700">Google</span>
              </button>

              {/* Apple ID */}
              <button
                onClick={() => handleSocialLogin('Apple')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.4a6.4 6.4 0 110-12.8 6.4 6.4 0 010 12.8z"/>
                </svg>
                <span className="text-sm text-gray-700">Apple ID</span>
              </button>

              {/* Facebook */}
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg font-bold text-blue-600 mr-2">f</span>
                <span className="text-sm text-gray-700">Facebook</span>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">Don't have an account? </span>
            <button className="text-sm text-black font-medium hover:underline transition-all">
              Request Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-gray-500 relative z-10">
        <span>Copyright @wework 2022 | Privacy Policy</span>
      </div>
    </div>
  );
};

export default Form;