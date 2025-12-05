import { writers } from '@/data/writers';
import Image from 'next/image';
import Link from 'next/link';


interface WriterDetailProps {
    params: Promise<{ id: string }>;
}

export default async function WriterDetail({ params }: WriterDetailProps) {

    const { id } = await params;

    const writer = writers.find((w) => w.id === id);

    if (!writer) {
        return (
            <div className="text-red-500 font-bold text-center mt-20">
                <h2 className="text-2xl mb-2">Penulis tidak ditemukan!</h2>
                <p className="text-gray-600">ID: {id}</p>
                <Link href="/writers" className="text-indigo-600 hover:underline mt-4 block">
                    Kembali ke Daftar
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10">
            <Link href="/writer" className="text-indigo-600 hover:underline mb-6 block font-medium">
                &larr; Kembali ke Daftar
            </Link>

            <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                    <Image
                        src={writer.avatarUrl}
                        alt={writer.name}
                        fill
                        className="rounded-full object-cover border-4 border-indigo-100 shadow-sm"
                    />
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{writer.name}</h1>
                <p className="text-gray-500 font-medium mb-6">{(writer.followers).toLocaleString()} Followers</p>

                <p className="text-gray-700 leading-relaxed">{writer.bio}</p>
            </div>
        </div>
    );
}