import { _messagesChat, albums_Chat , albums_T , albums_Dek , _messagesDek , hap , _messagesBD , _messagesJoke , _messagesLast} from "../src/assets/mock/mock";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useModal } from "./hooks/useModal";
import { Header, MessageSection , BDMessage , JokeMessage , LastMessage} from "./components/ui";
import { MemoryText } from "./components/common/";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


function App() {
    const { isModalVisible, currentImage, openModal,closeModal } = useModal();

    const messageRef = useRef(null);
    const memoryZoneRef = useRef(null);
    const BDMessageRef = useRef(null);
    const JokeMessageRef = useRef(null);
    const LastMessageRef = useRef(null);

    const isInViewMessageRef = useInView(messageRef, {
        once: true,
        amount: 0.2,
    });

    const isInViewLastMessageRef = useInView(LastMessageRef, {
        once: true,
        amount: 0.2,
    });

    const isInViewMessageJokeRef = useInView(JokeMessageRef, {
        once: true,
        amount: 0.2,
    });

    const isInViewMemoryZoneRef = useInView(memoryZoneRef, {
        once: true,
        amount: 0.2,
    });
    const isInViewBDMessageRef = useInView(BDMessageRef, {
        once: true,
        amount: 0.2,
    });

    return (
        <div>
            <div className="aura" />
            <div className="flex justify-center h-auto overflow-y-auto aura">
                <div className="flex flex-col items-center max-w-[350px] py-12 gap-16 relative">
                    <Header
                        content={{
                            title: "Happy Birth",
                            titleSec: "Pond Day &",
                            subtitle: "1st Anniversary",
                        }}
                    />
                    <div className="w-[245px] h-[270px] rounded-lg mb-12">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                        {albums_Dek.map((image, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div className="h-[320px] w-full rounded-lg overflow-hidden flex justify-center items-start">
                                    <img
                                        src={image}
                                        alt={`image_${index}`}
                                        onClick={() => openModal(image)}
                                        loading="lazy"
                                        className="w-full object-cover cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                    
                    <MessageSection
                        data={_messagesDek}
                        ref={messageRef}
                        isInView={isInViewMessageRef}
                    />

                    <div className="w-[245px] h-[270px] rounded-lg mb-12">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                        {hap.map((image, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div className="h-[320px] w-full rounded-lg overflow-hidden flex justify-center items-start">
                                    <img
                                        src={image}
                                        alt={`image_${index}`}
                                        onClick={() => openModal(image)}
                                        loading="lazy"
                                        className="w-full object-cover cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>

                    <BDMessage
                        data={_messagesBD}
                        ref={BDMessageRef}
                        isInView={isInViewBDMessageRef}
                    />
                    
                    <div className="text-6xl font-extrabold text-[#f78da4]">Memories Zone</div>
                    <MemoryText
                        ref={memoryZoneRef}
                        isInView={isInViewMemoryZoneRef}
                        data={ _messagesChat }
                    />
                    <div className="w-[245px] h-[320px] rounded-lg mb-12">
                        <Swiper
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                            }}
                            modules={[EffectCreative]}
                        >
                        {albums_Chat.map((image, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div className="h-[400px] w-full rounded-lg overflow-hidden flex justify-center items-start">
                                    <img
                                        src={image}
                                        alt={`image_${index}`}
                                        onClick={() => openModal(image)}
                                        loading="lazy"
                                        className="w-full object-cover cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                    <JokeMessage
                        data={_messagesJoke}
                        ref={JokeMessageRef}
                        isInView={isInViewMessageJokeRef}
                    />
                    <div className="w-[245px] h-[320px] rounded-lg mb-12">
                        <Swiper
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                            }}
                            modules={[EffectCreative]}
                        >
                        {albums_T.map((image, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div className="h-[400px] w-full rounded-lg overflow-hidden flex justify-center items-start">
                                    <img
                                        src={image}
                                        alt={`image_${index}`}
                                        onClick={() => openModal(image)}
                                        loading="lazy"
                                        className="w-full object-cover cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                    <LastMessage
                        data={_messagesLast}
                        ref={LastMessageRef}
                        isInView={isInViewLastMessageRef}
                    />

                    <div   div className={`pb-20 font-bold text-[#f78da4] text-3xl`}>
                        ----------------------------
                    </div>

                </div>
            </div>

            {isModalVisible && (
            <div className="modal show fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center" onClick={closeModal}>
                <div className="modal-content w-full h-full p-4 flex items-center justify-center">
                {currentImage && (
                    <img
                    src={currentImage}
                    alt="Preview"
                    className="modal-image max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
                )}
                </div>
            </div>
            )}
        </div>
    );
}

export default App;