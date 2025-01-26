import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className='container mx-auto'>
      <div className="min-h-screen flex flex-col">
        <Header />
        
      </div>
      <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50">
          <Component {...pageProps} />
        </main>
        
      </div>
      
      <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />
      </div>
      </div>
      <Footer />
    </Provider>
  );
}

export default MyApp;