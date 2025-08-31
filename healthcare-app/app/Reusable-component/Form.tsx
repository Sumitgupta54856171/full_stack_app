import React, { useState, useEffect } from 'react';

interface LoginFormProps {
  brandName?: string;
  contactEmail?: string;
  title?: string;
  subtitle?: string;
  onSubmit?: (email: string, password: string) => Promise<void>;
  onSocialLogin?: (provider: string) => void;
  showSocialLogin?: boolean;
  primaryColor?: string;
  showMedicalTheme?: boolean;
  showSignUpLink?: boolean;
  signUpText?: string;
  signUpLinkText?: string;
  onSignUpClick?: () => void;
}

const ReusableLoginForm: React.FC<LoginFormProps> = ({
  brandName = "Razor",
  contactEmail = "Sales@Razor.uk",
  title = "Agent Login",
  subtitle = "Hey, Enter your details to get sign in to your account",
  onSubmit,
  onSocialLogin,
  showSocialLogin = true,
  primaryColor = "orange",
  showMedicalTheme = true,
  showSignUpLink = true,
  signUpText = "Don't have an account?",
  signUpLinkText = "Request Now",
  onSignUpClick
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(email, password);
      } else {
        // Default behavior - simulate login
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Login attempted with:', { email, password });
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    } else {
      console.log(`Login with ${provider}`);
    }
  };

  const handleSignUpClick = () => {
    if (onSignUpClick) {
      onSignUpClick();
    } else {
      console.log('Sign up clicked');
    }
  };

  const getColorClasses = () => {
    const colorMap: Record<string, {bg: string; hover: string; ring: string; border: string}> = {
      orange: {
        bg: 'bg-orange-400',
        hover: 'hover:bg-orange-500',
        ring: 'focus:ring-orange-400 focus:border-orange-400',
        border: 'border-orange-400'
      },
      blue: {
        bg: 'bg-blue-500',
        hover: 'hover:bg-blue-600',
        ring: 'focus:ring-blue-500 focus:border-blue-500',
        border: 'border-blue-500'
      },
      green: {
        bg: 'bg-green-500',
        hover: 'hover:bg-green-600',
        ring: 'focus:ring-green-500 focus:border-green-500',
        border: 'border-green-500'
      },
      purple: {
        bg: 'bg-purple-500',
        hover: 'hover:bg-purple-600',
        ring: 'focus:ring-purple-500 focus:border-purple-500',
        border: 'border-purple-500'
      }
    };
    return colorMap[primaryColor] || colorMap.orange;
  };

  const colors = getColorClasses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black mr-4">{brandName}</h1>
          <div className="flex items-center text-sm text-gray-600">
            <span>{contactEmail}</span>
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
          <button className={`${colors.bg} ${colors.hover} text-black px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105`}>
            Request Demo
          </button>
        </div>
      </div>

      {/* Medical Theme Background Elements */}
      {showMedicalTheme && (
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
              <div className="absolute top-8 left-16">
                <div className="w-12 h-12 bg-blue-900 rounded-full mb-2 relative">
                  <div className="absolute -top-1 left-1 w-10 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-1 left-3 w-6 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div className="w-16 h-20 bg-white border-2 border-blue-200 rounded-t-2xl relative">
                  <div className="absolute top-2 left-2 w-3 h-8 bg-blue-500 rounded"></div>
                  <div className="absolute top-2 right-2 w-3 h-8 bg-blue-500 rounded"></div>
                  <div className="absolute bottom-2 left-4 w-8 h-2 bg-blue-300 rounded"></div>
                </div>
                <div className="flex space-x-2 mt-1">
                  <div className="w-6 h-16 bg-blue-800 rounded-full"></div>
                  <div className="w-6 h-16 bg-blue-800 rounded-full"></div>
                </div>
                <div className="flex space-x-2 -mt-2">
                  <div className="w-8 h-4 bg-white rounded-full border border-blue-300"></div>
                  <div className="w-8 h-4 bg-white rounded-full border border-blue-300"></div>
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

          {/* Additional medical elements */}
          <div className="absolute top-96 left-1/4">
            <div className="flex space-x-2 animate-pulse">
              <div className="w-4 h-6 bg-gradient-to-b from-red-400 to-white rounded-full"></div>
              <div className="w-4 h-6 bg-gradient-to-b from-blue-400 to-white rounded-full"></div>
              <div className="w-4 h-6 bg-gradient-to-b from-green-400 to-white rounded-full"></div>
            </div>
          </div>

          <div className="absolute top-32 right-48">
            <svg width="80" height="60" viewBox="0 0 80 60" className="animate-pulse">
              <path d="M10,10 Q40,0 70,30 Q75,35 70,40 Q65,45 60,40" 
                    stroke="#6B7280" strokeWidth="3" fill="none"/>
              <circle cx="70" cy="35" r="4" fill="#6B7280"/>
              <circle cx="10" cy="10" r="3" fill="#6B7280"/>
            </svg>
          </div>
        </div>
      )}

      {/* Main Login Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] relative z-20">
        <div 
          className={`bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg mx-4 transform transition-all duration-700 ${
            showForm ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          {/* Form Header */}
          <div className="text-center mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Enhanced Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address / Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({...prev, email: undefined}));
                  }}
                  placeholder="Enter your email or phone number"
                  className={`w-full pl-12 pr-4 py-4 text-lg border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 ${
                    errors.email 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-400' 
                      : `border-gray-200 ${colors.ring} hover:border-gray-300`
                  }`}
                />
                {email && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Enhanced Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors(prev => ({...prev, password: undefined}));
                  }}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-16 py-4 text-lg border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 ${
                    errors.password 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-400' 
                      : `border-gray-200 ${colors.ring} hover:border-gray-300`
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors p-1"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-orange-400 focus:ring-orange-400" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-gray-600 hover:text-gray-800 transition-colors hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Enhanced Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-black transition-all duration-300 text-lg ${
                isLoading 
                  ? `${colors.bg} opacity-50 cursor-not-allowed` 
                  : `${colors.bg} ${colors.hover} hover:shadow-lg transform hover:-translate-y-1 active:scale-98`
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span>Sign In</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </button>
          </form>

          {/* Social Login */}
          {showSocialLogin && (
            <div className="mt-10">
              <div className="flex items-center justify-center mb-8">
                <div className="border-t border-gray-200 flex-grow"></div>
                <span className="px-6 text-sm text-gray-500 bg-white">Or continue with</span>
                <div className="border-t border-gray-200 flex-grow"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Google */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:border-gray-300 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <span className="text-xs text-gray-700 font-medium">Google</span>
                </button>

                {/* Apple ID */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Apple')}
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:border-gray-300 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700 font-medium">Apple</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md hover:border-gray-300 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">f</span>
                  </div>
                  <span className="text-xs text-gray-700 font-medium">Facebook</span>
                </button>
              </div>
            </div>
          )}

          {/* Sign Up Link */}
          {showSignUpLink && (
            <div className="text-center mt-8">
              <span className="text-sm text-gray-600">{signUpText} </span>
              <button 
                type="button"
                onClick={handleSignUpClick}
                className="text-sm text-black font-semibold hover:underline transition-all transform hover:scale-105"
              >
                {signUpLinkText}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-gray-500 relative z-10">
        <span>Copyright @wework 2022 | Privacy Policy</span>
      </div>
    </div>
  );
};

// Example usage with different configurations
export default ReusableLoginForm;