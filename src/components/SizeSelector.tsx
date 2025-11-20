import { Check } from 'lucide-react';

interface SizeSelectorProps {
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
}

export function SizeSelector({ selectedSize, onSelectSize }: SizeSelectorProps) {
  const sizes = [
    { us: '7', eu: '40', available: true },
    { us: '7.5', eu: '40.5', available: true },
    { us: '8', eu: '41', available: true },
    { us: '8.5', eu: '42', available: false },
    { us: '9', eu: '42.5', available: true },
    { us: '9.5', eu: '43', available: true },
    { us: '10', eu: '44', available: true },
    { us: '10.5', eu: '44.5', available: true },
    { us: '11', eu: '45', available: true },
    { us: '11.5', eu: '45.5', available: false },
    { us: '12', eu: '46', available: true },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="block">Select Size</label>
        <button className="text-sm text-blue-600 hover:underline">Size Guide</button>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mb-3">
        {sizes.map((size) => (
          <button
            key={size.us}
            onClick={() => size.available && onSelectSize(size.us)}
            disabled={!size.available}
            className={`
              relative py-3 px-2 rounded-lg border-2 transition-all
              ${
                selectedSize === size.us
                  ? 'border-blue-600 bg-blue-50'
                  : size.available
                  ? 'border-gray-200 hover:border-gray-400 bg-white'
                  : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-50'
              }
            `}
          >
            <div className="text-center">
              <div className={selectedSize === size.us ? 'font-medium' : ''}>
                US {size.us}
              </div>
              <div className="text-xs text-gray-500">EU {size.eu}</div>
            </div>
            {selectedSize === size.us && (
              <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
            {!size.available && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-gray-300 rotate-[-45deg]" />
              </div>
            )}
          </button>
        ))}
      </div>
      
      {selectedSize && (
        <p className="text-sm text-green-600 flex items-center gap-1">
          <Check className="w-4 h-4" />
          Size US {selectedSize} selected
        </p>
      )}
      
      {!selectedSize && (
        <p className="text-sm text-gray-500">Please select a size to continue</p>
      )}
    </div>
  );
}
