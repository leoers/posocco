"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Coverage() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 992;

  return (
    <section className="section" style={{ ...styles.section, paddingTop: isMobile ? '60px' : '100px' }}>
      <div className="container" style={styles.container}>
        <div style={{ ...styles.grid, flexDirection: isMobile ? 'column' : 'row' }}>
          
          {/* Left Column - Map */}
          <div data-aos="fade-right" style={styles.leftCol}>
            <div style={styles.mapContainer}>
              <Image 
                src="/problemas-com-banco/brasil_mapa.png" 
                alt="Mapa do Brasil" 
                width={500}
                height={500}
                style={styles.mapImage}
              />

            </div>
          </div>

          {/* Right Column - Content */}
          <div data-aos="fade-left" data-aos-delay="200" style={{ ...styles.rightCol, alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
            <h2 style={styles.title}>Atendemos clientes em <span style={{ color: '#38BDF8' }}>todo o país</span></h2>
            
            <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px', fontFamily: 'var(--font-h)' }}>
                Central de atendimento via WhatsApp
              </h3>
              
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={styles.contactItem}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: '#38BDF8' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>(13) 99200-9191</span>
                </div>
                <div style={styles.contactItem}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: '#38BDF8' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>(11) 99217-5115</span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontWeight: 700, fontSize: '16px', color: '#E2E8F0', marginBottom: '4px' }}>Posocco & Advogados Associados</p>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '0' }}>CNPJ: 07.741.008/0001-58 · OAB/SP 9295</p>
            </div>



            <div style={{ marginTop: '24px' }}>
              <div style={{ ...styles.buttonWrapper, alignItems: isMobile ? 'center' : 'flex-start' }}>
                <a href="#formulario" className="btn-pill">
                  Quero iniciar o atendimento por WhatsApp
                  <div className="btn-wa-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                </a>
                <p style={styles.subtext}>A iniciativa é sempre sua. Nosso papel é oferecer informação clara para que você decida com segurança.</p>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '13px', color: '#64748B', fontStyle: 'italic', lineHeight: 1.5 }}>
                As informações contidas nesta página têm caráter educativo e não constituem aconselhamento jurídico individual. Cada caso possui suas especificidades.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#040d1a', 
    backgroundImage: `linear-gradient(to right, rgba(4, 13, 26, 0.98), rgba(4, 13, 26, 0.92)), url('/problemas-com-banco/background-build.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFFFFF',
    padding: '100px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  grid: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
  },
  leftCol: {
    flex: '1 1 50%',
    display: 'flex',
    justifyContent: 'center',
  },
  mapContainer: {
    position: 'relative' as const,
    maxWidth: '500px',
    width: '100%',
  },
  mapImage: {
    width: '100%',
    height: 'auto',
    opacity: 1,
    filter: 'brightness(1.5)',
  },
  locationBadge: {
    position: 'absolute' as const,
    bottom: '20px',
    left: '10%',
    backgroundColor: '#0a1529',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '30px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    fontWeight: 400,
    color: '#E2E8F0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
  rightCol: {
    flex: '1 1 50%',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '24px',
    lineHeight: 1.2,
    fontFamily: 'var(--font-h)',
  },
  text: {
    fontSize: '15px',
    color: '#CBD5E1', 
    lineHeight: 1.6,
    marginBottom: '24px',
    fontFamily: 'var(--font-p)',
  },
  addressBox: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    padding: '12px 24px',
    fontSize: '14px',
    color: '#CBD5E1',
    marginTop: '8px',
    width: 'fit-content',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    fontSize: '18px',
    color: '#CBD5E1',
    fontFamily: 'var(--font-p)',
  },
  buttonWrapper: {
    display: 'inline-flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#1E3A8A', 
    color: '#FFFFFF',
    fontFamily: 'var(--font-p)',
    fontWeight: 500,
    fontSize: '14px',
    padding: '6px 6px 6px 24px', 
    borderRadius: '40px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  waIcon: {
    width: '34px',
    height: '34px',
    backgroundColor: '#FFFFFF',
    color: '#1E3A8A',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '16px',
  },
  subtext: {
    fontSize: '13px',
    color: '#94A3B8',
    marginTop: '12px',
    alignSelf: 'center',
  }
};
