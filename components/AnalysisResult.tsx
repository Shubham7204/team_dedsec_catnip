'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, StarHalf } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AnalysisResultProps {
  analysis: string;
}

export default function AnalysisResult({ analysis }: AnalysisResultProps) {
  // Helper function to extract rating from the text
  const extractRating = (text: string): number => {
    const match = text.match(/Rating: (\d+)\/5/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    // Try alternative format
    const altMatch = text.match(/Nutritional Value.*?(\d+)\/5/);
    if (altMatch && altMatch[1]) {
      return parseInt(altMatch[1], 10);
    }
    return 0;
  };

  const rating = extractRating(analysis);

  // Helper function to get dietary restrictions
  const getDietaryInfo = (text: string) => {
    const restrictions = [];
    if (text.includes('Vegan: No')) restrictions.push({ name: 'Not Vegan', color: 'red' });
    if (text.includes('Vegan: Yes')) restrictions.push({ name: 'Vegan', color: 'green' });
    if (text.includes('Halal: Yes')) restrictions.push({ name: 'Halal', color: 'blue' });
    if (text.includes('Kosher: Yes')) restrictions.push({ name: 'Kosher', color: 'purple' });
    return restrictions;
  };

  const dietaryInfo = getDietaryInfo(analysis);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Nutritional Rating */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Nutritional Rating</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-6 h-6 ${
                  index < rating 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({rating}/5)
            </span>
          </div>
        </div>

        {/* Dietary Information */}
        {dietaryInfo.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Dietary Information</h3>
            <div className="flex flex-wrap gap-2">
              {dietaryInfo.map((item) => (
                <Badge
                  key={item.name}
                  className="px-3 py-1"
                  variant={item.color === 'red' ? 'destructive' : 'secondary'}
                >
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Main Analysis */}
        <div className="prose max-w-none">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-600 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-600">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-800">{children}</strong>
              ),
            }}
          >
            {analysis}
          </ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}