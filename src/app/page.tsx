'use client';
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsList from "./NewsList.client";
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <h1>{t('latestNews')}</h1>
        <NewsList />
      </main>
      <Footer />
    </>
  );
}
