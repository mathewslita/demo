import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto', display: 'swap' });

export const metadata = {
    title: 'F-IRST - Corporate Clothing | Uniformes y Dotación Industrial',
    description: 'Descubre nuestra colección de ropa corporativa, industrial y médica con diseños exclusivos y calidad garantizada.',
    keywords: ['uniformes corporativos', 'dotación industrial', 'ropa de trabajo', 'chalecos reflectivos', 'botas de seguridad', 'uniformes médicos', 'F-IRST Corp Ecuador'],
    authors: [{ name: 'F-IRST Corp' }],
    creator: 'F-IRST Corp',
    publisher: 'F-IRST Corp',
    metadataBase: new URL('http://localhost:3000'), // Debe reemplazarse en producción
    openGraph: {
        title: 'F-IRST - Imágenes y Soluciones Corporativas',
        description: 'Especialistas en imagen corporativa y dotación industrial. Calidad que define tu marca.',
        url: '/',
        siteName: 'F-IRST',
        images: [
            {
                url: '/portada.png',
                width: 1200,
                height: 630,
                alt: 'F-IRST Corporate Clothing',
            },
        ],
        locale: 'es_EC',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'F-IRST - Corporate Clothing',
        description: 'Especialistas en imagen corporativa y dotación industrial.',
        images: ['/portada.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${roboto.variable}`}>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
