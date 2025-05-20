import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormInput } from "../component/FormInput";
import { type RegisterFormData } from "../../types/formTypes";
import { type HomePageProps } from "../../types/pageTypes";

export const RegisterFormContainer: React.FC = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm<RegisterFormData>();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const email = watch("email");

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-xl p-12 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Create an Account</h1>
        <p className="text-gray-600 text-lg">Join our community today</p>
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">Registration successful!</span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormInput 
          id="email"
          label="Email"
          type="email"
          placeholder="your@email.com"
          register={register}
          registerOptions={{ 
            required: "Email is required", 
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email"
            }
          }}
          error={errors.email}
          helperText="We'll never share your email with anyone else."
        />

        <FormInput 
          id="confirmEmail"
          label="Confirm Email"
          type="email"
          placeholder="your@email.com"
          register={register}
          registerOptions={{ 
            required: "Please confirm your email",
            validate: (value: string) => value === email || "Emails do not match"
          }}
          error={errors.confirmEmail}
          helperText="Please confirm your email address."
        />

        <FormInput 
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          register={register}
          registerOptions={{ 
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          }}
          error={errors.password}
          helperText="Use at least 6 characters for security."
        />

        <div className="pt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-1"
          >
            Register Now
          </button>
        </div>

        <div className="text-center text-base text-gray-600 mt-6">
          Already have an account? 
          <button
            type="button"
            onClick={() => navigate('/test')}
            className="ml-2 inline-flex px-4 py-1.5 rounded-md font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = () => {

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-indigo-50 via-white to-blue-50">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Welcome to <span className="text-indigo-600">RocketLab</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md text-center md:text-left">
          Create your account today and join thousands of users already experiencing our platform.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-8 flex justify-center">
        <RegisterFormContainer />
      </div>
    </div>
  );
};

export default HomePage;