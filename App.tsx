
import React, { useState, useCallback } from 'react';
import { EvictionData, HellCircle } from './types';
import { generateEvictionNotice } from './geminiService';

// Sub-components
const Header: React.FC = () => (
  <header className="bg-black border-b-4 border-red-700 py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
    <div className="flex items-center space-x-4">
      <div className="bg-red-600 p-2 rounded-full border-2 border-amber-500 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      </div>
      <div>
        <h1 className="text-4xl font-cinzel font-black text-red-600 tracking-tighter">INMOBILIARIA SATANÁS</h1>
        <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Donde tu alma es el depósito</p>
      </div>
    </div>
    <div className="hidden md:flex items-center space-x-8 text-sm font-bold mt-4 md:mt-0">
      <button className="text-white hover:text-red-500 transition-colors uppercase">Jackpot de Almas</button>
      <button className="text-white hover:text-red-500 transition-colors uppercase">Ruleta de Pecados</button>
      <button className="bg-red-700 text-white px-6 py-2 rounded-none border-2 border-amber-500 hover:bg-red-600 transition-all shadow-[0_0_10px_rgba(220,38,38,0.8)]">
        VIP LOUNGE
      </button>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-black border-t-2 border-red-900 py-12 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <p className="text-red-900 text-sm mb-4">© 666 Inmobiliaria Satanás & Asociados. Todos los derechos reservados... para la eternidad.</p>
      <div className="flex justify-center space-x-6 text-red-700 text-xs font-bold">
        <a href="#" className="hover:text-red-500">TÉRMINOS DE TORTURA</a>
        <a href="#" className="hover:text-red-500">POLÍTICA DE PRIVACIDAD INFERNAL</a>
        <a href="#" className="hover:text-red-500">CONTRATOS DE SANGRE</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState<EvictionData>({
    tenantName: '',
    sinLevel: 'Moderado',
    circleOfHell: HellCircle.LIMBO,
    propertyAddress: '',
    evictionReason: '',
    contractDate: new Date().toISOString().split('T')[0],
  });

  const [generatedText, setGeneratedText] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedText('');
    const result = await generateEvictionNotice(formData);
    setGeneratedText(result || '');
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 flame-bg">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Panel - The Betting Table */}
          <div className="bg-zinc-900 p-8 casino-border rounded-lg flex flex-col space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 rotate-45 translate-x-12 -translate-y-12 flex items-end justify-center pb-2">
              <span className="text-black font-bold text-xs -rotate-45">777</span>
            </div>
            
            <h2 className="text-2xl font-cinzel font-bold text-amber-500 mb-4 border-b border-red-800 pb-2">
              Mesa de Desalojos
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-red-500 uppercase mb-1">Nombre del Condenado</label>
                <input 
                  type="text" 
                  name="tenantName"
                  value={formData.tenantName}
                  onChange={handleInputChange}
                  placeholder="Ej: Juan El Pecador"
                  className="w-full bg-black border-2 border-zinc-700 p-3 rounded text-white focus:border-red-600 outline-none transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-red-500 uppercase mb-1">Círculo de Residencia</label>
                <select 
                  name="circleOfHell"
                  value={formData.circleOfHell}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-zinc-700 p-3 rounded text-white focus:border-red-600 outline-none"
                >
                  {Object.values(HellCircle).map(circle => (
                    <option key={circle} value={circle}>{circle}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-red-500 uppercase mb-1">Nivel de Pecado</label>
                  <select 
                    name="sinLevel"
                    value={formData.sinLevel}
                    onChange={handleInputChange}
                    className="w-full bg-black border-2 border-zinc-700 p-3 rounded text-white focus:border-red-600 outline-none"
                  >
                    <option>Venial</option>
                    <option>Moderado</option>
                    <option>Mortal</option>
                    <option>Capital</option>
                    <option>Imperdonable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-500 uppercase mb-1">Fecha de Inicio</label>
                  <input 
                    type="date" 
                    name="contractDate"
                    value={formData.contractDate}
                    onChange={handleInputChange}
                    className="w-full bg-black border-2 border-zinc-700 p-3 rounded text-white focus:border-red-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-red-500 uppercase mb-1">Dirección del Averno</label>
                <input 
                  type="text" 
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  placeholder="Calle de las Almas en Pena #666"
                  className="w-full bg-black border-2 border-zinc-700 p-3 rounded text-white focus:border-red-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-red-500 uppercase mb-1">Motivo del Desalojo (Pecado cometido)</label>
                <textarea 
                  name="evictionReason"
                  value={formData.evictionReason}
                  onChange={handleInputChange}
                  placeholder="¿Por qué lo echamos? (Ej: Demasiada bondad inesperada)"
                  rows={4}
                  className="w-full bg-black border-2 border-zinc-700 p-3 rounded text-white focus:border-red-600 outline-none resize-none"
                />
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full py-4 mt-4 font-cinzel font-black text-xl tracking-widest transition-all duration-300 relative group
                ${isGenerating 
                  ? 'bg-zinc-800 cursor-not-allowed text-zinc-600' 
                  : 'bg-red-700 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(185,28,28,0.7)] hover:shadow-[0_0_40px_rgba(185,28,28,0.9)]'
                }`}
            >
              <span className="relative z-10">{isGenerating ? 'CONJURANDO...' : '¡EJECUTAR SENTENCIA!'}</span>
              <div className="absolute inset-0 bg-amber-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </div>

          {/* Output Panel - The Jackpot Result */}
          <div className="flex flex-col space-y-6">
            <div className="bg-black p-8 border-4 border-double border-red-700 min-h-[500px] flex flex-col relative rounded-sm shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-700 px-6 py-1 border-2 border-amber-500 text-xs font-bold text-white uppercase tracking-widest">
                Contrato Ejecutado
              </div>
              
              {isGenerating ? (
                <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 border-4 border-red-600 border-t-amber-500 rounded-full animate-spin"></div>
                  <p className="text-red-500 font-cinzel text-lg animate-pulse">Calculando intereses de tormento...</p>
                </div>
              ) : generatedText ? (
                <div className="flex-grow flex flex-col animate-slot-machine-animation">
                  <div className="prose prose-invert prose-red max-w-none">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-cinzel text-red-600 mb-0 font-black">ORDEN DE DESALOJO</h3>
                      <p className="text-amber-500 text-sm italic">Expediente No. {Math.floor(Math.random() * 9999999)}</p>
                    </div>
                    <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-stone-300">
                      {generatedText}
                    </div>
                    <div className="mt-12 pt-8 border-t border-red-900 flex justify-between items-end">
                      <div className="text-center">
                        <div className="w-48 border-b border-red-600 h-10 mb-2"></div>
                        <p className="text-[10px] text-red-700 uppercase font-bold">Inquilino Condenado</p>
                      </div>
                      <div className="text-center">
                        <div className="w-48 flex justify-center mb-2">
                           <svg className="w-12 h-12 text-red-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                           </svg>
                        </div>
                        <p className="text-[10px] text-red-700 uppercase font-bold">Sello del Abismo</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.print()}
                    className="mt-8 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold py-2 px-4 border border-zinc-600 flex items-center justify-center space-x-2 transition-colors self-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>IMPRIMIR PARA EL EXPEDIENTE</span>
                  </button>
                </div>
              ) : (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-12">
                  <div className="w-32 h-32 text-red-900 opacity-20 mb-6">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.5 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm10 0c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zM7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-7c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-cinzel text-zinc-700">Esperando veredicto del Gran Casino Infernal</h4>
                  <p className="text-zinc-800 mt-2 text-sm italic">Completa los datos para girar la ruleta del desalojo</p>
                </div>
              )}
            </div>

            {/* Odds / Info Section */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-950/30 p-4 border border-red-900 rounded text-center">
                <span className="block text-2xl font-bold text-red-500">666:1</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Probabilidades de Perdón</span>
              </div>
              <div className="bg-red-950/30 p-4 border border-red-900 rounded text-center">
                <span className="block text-2xl font-bold text-red-500">∞</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Interés Moratorio</span>
              </div>
              <div className="bg-red-950/30 p-4 border border-red-900 rounded text-center">
                <span className="block text-2xl font-bold text-red-500">100%</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Tasa de Desalojo</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
