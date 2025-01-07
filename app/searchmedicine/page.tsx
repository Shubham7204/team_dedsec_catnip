'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MedicineInfo from '@/components/MedicineInfo'
import ChatInterface from '@/components/ChatInterface'

const MAX_RECENT_SEARCHES = 5

export default function Home() {
  const [query, setQuery] = useState('')
  const [medicines, setMedicines] = useState([])
  const [selectedMedicine, setSelectedMedicine] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('recentMedicineSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  const addToRecentSearches = (search: string) => {
    const updated = [search, ...recentSearches.filter(s => s !== search)]
      .slice(0, MAX_RECENT_SEARCHES)
    setRecentSearches(updated)
    localStorage.setItem('recentMedicineSearches', JSON.stringify(updated))
  }

  const searchMedicines = async (searchQuery: string) => {
    setIsSearching(true)
    setError('')
    try {
      const res = await fetch(`/api/medicine?query=${encodeURIComponent(searchQuery)}`)
      const data = await res.json()

      if (res.ok) {
        setMedicines(data)
        addToRecentSearches(searchQuery)
      } else {
        throw new Error(data.error || 'Error searching for medicines')
      }
    } catch (error) {
      console.error('Error searching medicines:', error)
      setError(error.message || 'Error searching for medicines')
      setMedicines([])
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Medicine Search and Chat</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search for a Medicine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="text" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Enter medicine name" 
              className="flex-grow"
            />
            <Button 
              onClick={() => searchMedicines(query)} 
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {recentSearches.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Recent searches:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {recentSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery(search)
                      searchMedicines(search)
                    }}
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            {medicines.length > 0 ? (
              <ul className="space-y-2">
                {medicines.map((medicine, index) => (
                  <li 
                    key={medicine.id || index} 
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                    onClick={() => setSelectedMedicine(medicine)}
                  >
                    <div className="font-medium">{medicine.name}</div>
                    {medicine.genericName && (
                      <div className="text-sm text-gray-600">
                        {medicine.genericName}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No medicines found. Try searching for a medicine.
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medicine Information and Chat</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMedicine ? (
              <>
                <MedicineInfo medicine={selectedMedicine} />
                <ChatInterface medicine={selectedMedicine} />
              </>
            ) : (
              <p className="text-gray-500">
                Select a medicine to view information and chat.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
