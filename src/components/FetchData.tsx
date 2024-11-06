import { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs, FirestoreError } from 'firebase/firestore';


interface Ad {
    id: string;
    title: string;
    category: string;
    price: number;
    description: string;
    imageUrl: string;
    createdAt: Date;
}

const UseFetchAds = () => {
    const [ads, setAds] = useState<Ad[]>([]);
    const [error, setError] = useState<FirestoreError | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const adsCollection = collection(db, 'ads');
                const adsSnapshot = await getDocs(adsCollection);
                const adsList = adsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ad));
                setAds(adsList);
            } catch (error) {
                setError(error as FirestoreError);
            } finally {
                setLoading(false);
            }
        }

        fetchAds();
    }, []);
    return { ads, loading, error };
}

export default UseFetchAds;
