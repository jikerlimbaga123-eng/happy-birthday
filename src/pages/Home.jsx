import React, { useEffect, useState, useRef } from "react";
import png from '../assets/1.png';
import ballon1 from '../assets/balloon1.png';
import ballon2 from '../assets/balloon2.png';
import decorate from '../assets/decorate.png';
import decoFlowers from '../assets/decorate_flower.png';
import hat from '../assets/hat.png';
import smileIcon from '../assets/smiley_icon.png';
import BookCanvas from "../components/BookCanvas";
import orihime from "../assets/orihime.jpg";
import flowersImg from "../assets/flowers.jpg";
import bikeImg from "../assets/bike.jpg";
import phoneImg from "../assets/phone.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";
import p15 from "../assets/p15.jpg";
import p16 from "../assets/p16.jpg";
import p17 from "../assets/p17.jpg";
import p18 from "../assets/p18.jpg";
import p19 from "../assets/p19.jpg";
import p20 from "../assets/p20.jpg";
import p21 from "../assets/p21.jpg";
import p22 from "../assets/p22.jpg";
import p23 from "../assets/p23.jpg";
import p24 from "../assets/p24.jpg";
import p25 from "../assets/p25.jpg";

const Home = () => {
    const [Active, SetActive] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedGift, setSelectedGift] = useState(null);
    const [showGallery, setShowGallery] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);
    const playerRef = useRef(null);
    const galleryPlayerRef = useRef(null);

    const galleryPhotos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25];

    const gifts = [
        {
            key: 'flowers', img: flowersImg, label: 'Flowers 🌸',
            shortDesc: 'Para sa taong nakilala ko lang sa tiktok live HAHAHA',
            fullDesc: "Isang bouquet ng magagandang bulaklak para sayo lars the star or kaya meowmeow hindi ko kasi alam ang tunay mong pangalan. Sana'y magustuhan mo ito 😊!"
        },
        {
            key: 'bike', img: bikeImg, label: 'Bike 🚲',
            shortDesc: 'Yung Wish mo sa Live na Gusto mo ng Bike',
            fullDesc: 'Ito naman ay bike. Naisip ko ito i-gifts sayo kasi sabi mo sa live gusto mo ng bike sa birthday mo HAHAHAHA. Pasensya kana kung hindi tunay na bike, pero sana masaya ka sa regalo na ito 😊!'
        },
        {
            key: 'phone', img: phoneImg, label: 'iPhone 14 📱',
            shortDesc: 'Para Makapag CODM kana ng maayos HAAHHAA JWK',
            fullDesc: 'iPhone 14 na color pink! Iniregalo ko sayo para mamotivate kapa mag-aral HAHAHAHAHAHAH. Sana magustuhan mo kahit picture lang 😊!'
        },
    ];

    const openGiftModal = (gift) => { setSelectedGift(gift); document.body.style.overflow = 'hidden'; };
    const closeModal = () => { setSelectedGift(null); document.body.style.overflow = 'auto'; };

    const openGallery = () => {
        setShowGallery(true);
        if (playerRef.current) playerRef.current.pauseVideo();
        setTimeout(() => {
            if (galleryPlayerRef.current) {
                galleryPlayerRef.current.unMute();
                galleryPlayerRef.current.setVolume(60);
                galleryPlayerRef.current.playVideo();
            }
        }, 500);
    };

    const closeGallery = () => {
        setShowGallery(false);
        setActivePhoto(null);
        if (galleryPlayerRef.current) galleryPlayerRef.current.pauseVideo();
        if (playerRef.current) playerRef.current.playVideo();
    };

    useEffect(() => {
        let datetxt = "04 June 2026";
        let charArrDate = datetxt.split('');
        let currentIndex = 0;
        let date__of__birth = document.querySelector(".date__of__birth span");
        let typedText = "";
        setTimeout(function () {
            let timeDatetxt = setInterval(function () {
                if (currentIndex < charArrDate.length) {
                    typedText += charArrDate[currentIndex];
                    date__of__birth.textContent = typedText;
                    currentIndex++;
                } else {
                    clearInterval(timeDatetxt);
                    if (!date__of__birth.classList.contains("svg-added")) {
                        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                        svg.setAttribute("width", "24"); svg.setAttribute("height", "24");
                        svg.setAttribute("viewBox", "0 0 24 24");
                        svg.innerHTML = `<path fill="#a31414" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"/> <path fill="#a31414" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity="0.5"/>`;
                        let container = document.querySelector(".date__of__birth");
                        container.prepend(svg);
                        container.appendChild(svg.cloneNode(true));
                        date__of__birth.classList.add("svg-added");
                    }
                }
            }, 100);
        }, 12000);
    }, []);

    useEffect(() => {
        const initPlayers = () => {
            // Main birthday music player
            playerRef.current = new window.YT.Player('yt-player', {
                videoId: 'maEVfpxDB8k',
                playerVars: { autoplay: 1, loop: 1, playlist: 'maEVfpxDB8k', controls: 0, mute: 1 },
                events: {
                    onReady: (e) => {
                        e.target.playVideo();
                        const unmute = () => {
                            if (playerRef.current) {
                                playerRef.current.unMute();
                                playerRef.current.setVolume(60);
                                setIsPlaying(true);
                                setIsMuted(false);
                            }
                            document.removeEventListener('click', unmute);
                        };
                        document.addEventListener('click', unmute);
                    }
                }
            });

            // Gallery music player
            galleryPlayerRef.current = new window.YT.Player('gallery-yt-player', {
    videoId: 'nXjhSMWBE30',
    playerVars: { autoplay: 0, loop: 1, playlist: 'HEAn4FqXFY4', controls: 0, mute: 1 },
                events: {
                    onReady: (e) => { e.target.setVolume(60); }
                }
            });
        };

        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(tag);
            window.onYouTubeIframeAPIReady = initPlayers;
        } else if (window.YT.Player) {
            initPlayers();
        } else {
            window.onYouTubeIframeAPIReady = initPlayers;
        }
    }, []);

    const toggleMusic = () => {
        const player = playerRef.current;
        if (!player) return;
        if (isMuted) {
            player.unMute();
            player.setVolume(60);
            setIsMuted(false);
        } else {
            player.mute();
            setIsMuted(true);
        }
    };

    return (
        <>
            {/* Hidden YouTube Players */}
            <div id="yt-player" style={{ position: 'fixed', bottom: '-9999px', left: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}></div>
            <div id="gallery-yt-player" style={{ position: 'fixed', bottom: '-9999px', left: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}></div>

            {/* Music Control Button */}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 99999 }}>
                <button onClick={toggleMusic} style={{
                    background: 'linear-gradient(135deg, #FF7882, #ffb347)',
                    border: 'none', borderRadius: '50%', width: '55px', height: '55px',
                    fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,120,130,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                title={isMuted ? 'I-unmute' : 'I-mute'}>
                    {isMuted ? '🔇' : '🎵'}
                </button>
            </div>

            <div id="wrapper">
                <div className="flag__birthday">
                    <img src={png} alt="" width="350" className="flag__left" />
                    <img src={png} alt="" width="350" className="flag__right" />
                </div>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="happy">
                                <span style={{ "--t": "4s" }}>H</span><span style={{ "--t": "4.2s" }}>a</span>
                                <span style={{ "--t": "4.4s" }}>p</span><span style={{ "--t": "4.6s" }}>p</span>
                                <span style={{ "--t": "4.8s" }}>y</span>
                            </h1>
                            <h1 className="birthday">
                                <span style={{ "--t": "5s" }}>B</span><span style={{ "--t": "5.2s" }}>i</span>
                                <span style={{ "--t": "5.4s" }}>r</span><span style={{ "--t": "5.6s" }}>t</span>
                                <span style={{ "--t": "5.8s" }}>h</span><span style={{ "--t": "6s" }}>d</span>
                                <span style={{ "--t": "6.2s" }}>a</span><span style={{ "--t": "6.4s" }}>y</span>
                            </h1>
                            <div className="hat"><img src={hat} alt="" width="130" /></div>
                        </div>
                        <div className="date__of__birth"><span></span></div>
                        <div className="btn flex md:gap-2 md:flex-row flex-col">
                            <button onClick={() => SetActive(!Active)} id="btn__letter">
                                <div className="mail flex items-center justify-center gap-2 md:text-[1rem] text-sm">
                                  <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                                        <path fill="#fff" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0 1-2.914 2.914" />
                                        <path fill="#ea5a47" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.098l-.003-.002a5.86 5.86 0 0 0 1.305-3.69" />
                                        <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0 1-2.914 2.914" />
                                            <path strokeLinecap="round" d="m5 16l15 16m47-16L52 32" />
                                            <path strokeLinejoin="round" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.098l-.003-.002a5.86 5.86 0 0 0 1.305-3.69z" />
                                        </g>
                                    </svg>

                                    Click Here Meowmeow
                                </div>
                            </button>
                            <div id="FromRexon">
                                <button onClick={openGallery} className="flex items-center gap-2 md:text-[1rem] text-sm">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <path fill="#d13852" d="M63.841 18.646c-.246-3.85-1.072-6.977-3.752-10.198c-5.369-6.439-17.71-7.511-23.23-1.312c-.963.912-1.872 2.01-2.785 3.322l-2.066 2.969l-2.067-2.969c-.916-1.312-1.827-2.411-2.79-3.322C21.627.937 9.287 2.008 3.921 8.448C1.237 11.669.412 14.796.166 18.646c-.184 11.446 8.122 20.611 9.147 21.954c5.637 6.613 11.786 12.866 18.03 18.627c1.13.989 2.106 1.812 3.082 2.628c.587.479 1.166.964 1.749 1.44c.582-.477 1.159-.961 1.743-1.44c.98-.816 1.956-1.639 3.082-2.628c6.247-5.761 12.397-12.01 18.04-18.627c1.025-1.343 9.332-10.508 8.979-21.954" />
                                        <path fill="#f1a5b1" d="M60.39 16.604a10.1 10.1 0 0 0-.457-2.909a9 9 0 0 0-1.169-2.42c-2.973-4.369-9.451-5.943-14.863-4.837c-2.111.508-4.225 1.302-5.197 3.318c-.331.865.365 1.281 1.44 1.228c3.894-.435 8.202-.043 11.645 1.63c.858.42 1.661.918 2.395 1.503c2.47 1.913 3.537 4.887 4.02 7.837c1.201-.242 1.854-1.683 2.01-2.965a10.5 10.5 0 0 0 .177-2.385" />
                                    </svg>
                                    Your Photos
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="box__account">
                            <div className="image"><img src={orihime} alt="" /></div>
                            <div className="name">
                                <i className="fa-solid fa-heart"></i>
                                <span>Hello Lars</span>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="balloon_one"><img width="100px" src={ballon1} alt="" /></div>
                            <div className="balloon_two"><img width="100px" src={ballon2} alt="" /></div>
                        </div>
                        <div className="cricle">
                            <div className="text__cricle">
                                {["h","a","p","p","y","-","b","i","r","t","h","d","a","y","-"].map((char, i) => (
                                    <span key={i} style={{ "--i": i + 1 }}>{char}</span>
                                ))}
                            </div>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>

                {/* Gift Section */}
                <div className="gift-section">
                    <div className="gift-header">
                        <h2 className="gift-title">🎁 Gifts for You</h2>
                        <p className="gift-subtitle">Pili ka lang Lar 💝</p>
                    </div>
                    <div className="gift-grid">
                        {gifts.map((gift) => (
                            <div key={gift.key} className="gift-card" onClick={() => openGiftModal(gift)}>
                                <div className="gift-icon">🎁</div>
                                <p className="gift-label">{gift.label}</p>
                                <p className="gift-desc">{gift.shortDesc}</p>
                                <button className="gift-btn">Open your Gift</button>
                            </div>
                        ))}
                    </div>
                </div>

                {[1,2,3,4,5].map((n, i) => (
                    <div key={i} className={`decorate_star star${n}`} style={{ "--t": `${15 + i * 0.2}s` }}></div>
                ))}
                <div className="decorate_flower--one" style={{ "--t": "15s" }}><img width="20" src={decoFlowers} alt="" /></div>
                <div className="decorate_flower--two" style={{ "--t": "15.3s" }}><img width="20" src={decoFlowers} alt="" /></div>
                <div className="decorate_flower--three" style={{ "--t": "15.6s" }}><img width="20" src={decoFlowers} alt="" /></div>
                <div className="decorate_bottom"><img src={decorate} alt="" width="100" /></div>
                <div className="smiley__icon"><img src={smileIcon} alt="" width="100" /></div>
                <BookCanvas active={Active} setActive={SetActive} />
            </div>

            {/* Gift Modal */}
            {selectedGift && (
                <div className="gift-modal-overlay" onClick={closeModal}>
                    <div className="gift-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <div className="modal-image-container">
                            <img src={selectedGift.img} alt={selectedGift.label} className="modal-image" />
                        </div>
                        <div className="modal-content">
                            <h3 className="modal-title">{selectedGift.label}</h3>
                            <p className="modal-full-desc">{selectedGift.fullDesc}</p>
                            <div className="modal-heart">❤️ Happy Birthday Lar! ❤️</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Modal */}
            {showGallery && (
                <div onClick={closeGallery} style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 99999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', padding: '20px', boxSizing: 'border-box'
                }}>
                    <button onClick={closeGallery} style={{
                        position: 'fixed', top: '20px', right: '25px',
                        background: 'rgba(255,120,130,0.9)', border: 'none', borderRadius: '50%',
                        width: '45px', height: '45px', fontSize: '24px', color: 'white',
                        cursor: 'pointer', zIndex: 100000, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                    }}>✕</button>

                    <h2 style={{ fontFamily: 'Dancing Script, cursive', color: '#FF7882', fontSize: '42px', marginBottom: '25px' }}>
                        💖 Your Beautiful Memories 💖
                    </h2>

                    {activePhoto && (
                        <div onClick={(e) => e.stopPropagation()} style={{ marginBottom: '30px', position: 'relative' }}>
                            <div style={{
                                position: 'relative', padding: '12px',
                                background: 'linear-gradient(135deg, #FF7882, #ffb347)',
                                borderRadius: '24px', boxShadow: '0 20px 35px rgba(0,0,0,0.3)',
                            }}>
                                <div style={{ background: 'white', borderRadius: '16px', padding: '8px' }}>
                                    <img src={activePhoto} alt="" style={{
                                        maxHeight: '400px', maxWidth: '85vw', borderRadius: '12px',
                                        display: 'block', margin: '0 auto', objectFit: 'contain'
                                    }} />
                                </div>
                                <div style={{ position: 'absolute', top: '-5px', left: '-5px', fontSize: '30px' }}>🌸</div>
                                <div style={{ position: 'absolute', top: '-5px', right: '-5px', fontSize: '30px' }}>🌸</div>
                                <div style={{ position: 'absolute', bottom: '-5px', left: '-5px', fontSize: '30px' }}>🌸</div>
                                <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', fontSize: '30px' }}>🌸</div>
                            </div>
                        </div>
                    )}

                    <div onClick={(e) => e.stopPropagation()} style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                        gap: '20px', maxWidth: '750px', width: '100%',
                        maxHeight: activePhoto ? '200px' : '450px',
                        overflowY: 'auto', padding: '15px 20px',
                        background: 'rgba(255,240,245,0.15)', borderRadius: '40px', backdropFilter: 'blur(4px)',
                    }}>
                        {galleryPhotos.map((photo, i) => (
                            <div key={i} onClick={() => setActivePhoto(photo)}
                                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <div style={{
                                    background: 'linear-gradient(135deg, #FF7882, #ffb347)',
                                    padding: '4px', borderRadius: '18px',
                                    boxShadow: activePhoto === photo ? '0 0 0 3px white, 0 8px 20px rgba(0,0,0,0.2)' : '0 4px 10px rgba(0,0,0,0.15)',
                                }}>
                                    <div style={{ background: 'white', borderRadius: '14px', padding: '3px' }}>
                                        <img src={photo} alt={`memory ${i + 1}`} style={{
                                            width: '100%', aspectRatio: '1/1',
                                            objectFit: 'cover', borderRadius: '12px', display: 'block',
                                        }} />
                                    </div>
                                </div>
                                <p style={{
                                    textAlign: 'center', marginTop: '8px', fontSize: '12px',
                                    color: '#FFE4E1', fontFamily: 'cursive', fontWeight: '500'
                                }}>✨ Memory {i + 1} ✨</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>
                        <p style={{ color: '#FFB6C1', fontSize: '14px', fontFamily: 'cursive' }}>
                            Click on any photo to relive the moment 💕
                        </p>
                    </div>
                </div>
            )}

            <style jsx>{`
                .gift-section { text-align: center; padding: 3rem 1rem; background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%); border-radius: 60px 60px 30px 30px; margin: 2rem 1rem; box-shadow: 0 10px 30px rgba(255,120,130,0.2); }
                .gift-header { margin-bottom: 2rem; }
                .gift-title { font-family: 'Dancing Script', cursive; font-size: 42px; color: #FF7882; margin-bottom: 0.5rem; }
                .gift-subtitle { font-size: 16px; color: #b8868b; font-style: italic; }
                .gift-grid { display: flex; justify-content: center; gap: 30px; max-width: 800px; margin: 0 auto; flex-wrap: wrap; }
                .gift-card { background: white; border-radius: 24px; padding: 1.8rem 1rem; cursor: pointer; transition: all 0.3s ease; text-align: center; width: 200px; min-height: 220px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); border: 1px solid rgba(255,120,130,0.3); display: flex; flex-direction: column; align-items: center; justify-content: space-between; }
                .gift-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(255,120,130,0.25); border-color: #FF7882; }
                .gift-icon { font-size: 56px; margin-bottom: 12px; }
                .gift-label { font-weight: 600; font-size: 18px; color: #FF7882; margin-bottom: 8px; }
                .gift-desc { font-size: 11px; color: #999; margin-bottom: 15px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
                .gift-btn { background: #FF7882; border: none; color: white; padding: 8px 16px; border-radius: 30px; font-size: 12px; cursor: pointer; font-weight: 500; transition: background 0.2s; }
                .gift-btn:hover { background: #e05c66; }
                .gift-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 9999; }
                .gift-modal { background: linear-gradient(145deg, #fff8f0, #ffefef); border-radius: 48px; max-width: 500px; width: 90%; position: relative; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.3); animation: modalFadeIn 0.3s ease; }
                @keyframes modalFadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
                .modal-close { position: absolute; top: 16px; right: 20px; background: rgba(255,120,130,0.9); border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 20px; color: white; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; }
                .modal-close:hover { transform: scale(1.1); }
                .modal-image-container { background: #ffe0e0; padding: 30px 20px 20px; text-align: center; }
                .modal-image { width: 220px; height: 220px; object-fit: cover; border-radius: 50%; border: 6px solid white; box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
                .modal-content { padding: 24px 28px 32px; text-align: center; }
                .modal-title { font-family: 'Dancing Script', cursive; font-size: 32px; color: #FF7882; margin-bottom: 16px; }
                .modal-full-desc { font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 24px; }
                .modal-heart { font-size: 18px; color: #FF7882; border-top: 1px solid #ffd6d6; padding-top: 20px; font-weight: 500; }
            `}</style>
        </>
    );
};

export default Home;