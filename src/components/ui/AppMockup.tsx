
import React from 'react';
import { Search, Heart, ShoppingBag, MapPin, Clock, Star, Plus } from 'lucide-react';

export const AppMockup = () => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 bg-white">
            <span className="text-sm font-semibold">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
              <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Local Angels</h1>
                <p className="text-red-600 text-sm font-medium">📍 Braunschweig</p>
              </div>
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-gray-700" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Suche Produkte oder Läden..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="px-6 py-4">
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">🌸 Blumen</div>
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">🥕 Bio</div>
              <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">📚 Bücher</div>
            </div>
          </div>

          {/* Store Cards */}
          <div className="px-6 space-y-4">
            {/* Store 1 */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Blumen Schmidt</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">350m entfernt</span>
                    </div>
                  </div>
                </div>
                <Heart className="w-5 h-5 text-gray-300" />
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-xs text-gray-500">(124)</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Heute bis 18:00</span>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Frühlingsstrauß</div>
                  <div className="font-bold text-red-600">€24,90</div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Tulpen (10 Stk.)</div>
                  <div className="font-bold text-red-600">€12,50</div>
                </div>
                <button className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Store 2 */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🥕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bio Markt Grün</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">180m entfernt</span>
                    </div>
                  </div>
                </div>
                <Heart className="w-5 h-5 text-red-400 fill-current" />
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-xs text-gray-500">(89)</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Heute bis 20:00</span>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Bio-Äpfel (1kg)</div>
                  <div className="font-bold text-red-600">€3,90</div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Vollkornbrot</div>
                  <div className="font-bold text-red-600">€4,50</div>
                </div>
                <button className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-1">
                <Search className="w-5 h-5 text-red-500" />
                <span className="text-xs text-red-500 font-medium">Entdecken</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart className="w-5 h-5 text-gray-400" />
                <span className="text-xs text-gray-400">Favoriten</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShoppingBag className="w-5 h-5 text-gray-400" />
                <span className="text-xs text-gray-400">Warenkorb</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-xs text-gray-400">Karte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
