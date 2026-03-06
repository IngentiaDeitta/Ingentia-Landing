'use client';

import * as React from 'react';
import { useConversation } from '@elevenlabs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Phone, PhoneOff, Loader2 } from 'lucide-react';

const AGENT_ID = 'agent_5801kjr71dzqfcn9apa7ga2ahnw0';

type ConversationStatus = 'idle' | 'requesting' | 'connected' | 'disconnected';

export function ConversationalAgent() {
    const [open, setOpen] = React.useState(false);
    const [uiStatus, setUiStatus] = React.useState<ConversationStatus>('idle');

    const conversation = useConversation({
        onConnect: () => setUiStatus('connected'),
        onDisconnect: () => {
            setUiStatus('disconnected');
            setTimeout(() => {
                setOpen(false);
                setUiStatus('idle');
            }, 1500);
        },
        onError: (error) => {
            console.error('ElevenLabs error:', error);
            setUiStatus('idle');
        },
    });

    const startConversation = async () => {
        setOpen(true);
        setUiStatus('requesting');
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({
                agentId: AGENT_ID,
                connectionType: 'webrtc',
            });
        } catch (err) {
            console.error('Could not start conversation:', err);
            setUiStatus('idle');
            setOpen(false);
        }
    };

    const endConversation = async () => {
        await conversation.endSession();
    };

    return (
        <>
            {/* Trigger Button - rendered by Navbar via callback, but we also expose it as a standalone */}
            <button
                id="kaizen-cta"
                onClick={startConversation}
                className="hidden"
                aria-label="Hablar con un Ingeniero Virtual"
            />

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-sm bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center gap-6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative"
                        >
                            {/* Close */}
                            <button
                                onClick={endConversation}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            >
                                <PhoneOff className="w-5 h-5" />
                            </button>

                            {/* Avatar pulse ring */}
                            <div className="relative flex items-center justify-center">
                                {(uiStatus === 'connected' && conversation.isSpeaking) && (
                                    <motion.div
                                        className="absolute w-28 h-28 rounded-full bg-accent-blue/30"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ duration: 1.4, repeat: Infinity }}
                                    />
                                )}
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/40">
                                    {uiStatus === 'requesting' ? (
                                        <Loader2 className="w-10 h-10 text-white animate-spin" />
                                    ) : uiStatus === 'connected' ? (
                                        conversation.isSpeaking ? (
                                            <Mic className="w-10 h-10 text-white" />
                                        ) : (
                                            <MicOff className="w-10 h-10 text-white/60" />
                                        )
                                    ) : (
                                        <Phone className="w-10 h-10 text-white" />
                                    )}
                                </div>
                            </div>

                            {/* Agent name */}
                            <div className="text-center">
                                <p className="text-white font-semibold text-lg">Kaizen</p>
                                <p className="text-white/50 text-sm mt-0.5">Ingeniero Virtual · Ingentia</p>
                            </div>

                            {/* Status message */}
                            <div className="text-center min-h-[24px]">
                                {uiStatus === 'requesting' && (
                                    <p className="text-white/60 text-sm animate-pulse">Conectando…</p>
                                )}
                                {uiStatus === 'connected' && (
                                    <p className="text-white/60 text-sm">
                                        {conversation.isSpeaking ? 'Kaizen está hablando…' : 'Escuchando…'}
                                    </p>
                                )}
                                {uiStatus === 'disconnected' && (
                                    <p className="text-white/40 text-sm">Sesión finalizada</p>
                                )}
                            </div>

                            {/* End button */}
                            {uiStatus === 'connected' && (
                                <button
                                    onClick={endConversation}
                                    className="flex items-center gap-2 bg-red-600/80 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
                                >
                                    <PhoneOff className="w-4 h-4" />
                                    Finalizar llamada
                                </button>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/** Reusable button that opens the Kaizen agent */
export function KaizenButton({ className, children }: { className?: string, children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className={className}>
                {children || "Hablar con un Ingeniero Virtual"}
            </button>
            {open && <KaizenModal onClose={() => setOpen(false)} />}
        </>
    );
}

function KaizenModal({ onClose }: { onClose: () => void }) {
    const [uiStatus, setUiStatus] = React.useState<ConversationStatus>('requesting');

    const conversation = useConversation({
        onConnect: () => setUiStatus('connected'),
        onDisconnect: () => {
            setUiStatus('disconnected');
            setTimeout(onClose, 1200);
        },
        onError: () => { setUiStatus('idle'); onClose(); },
    });

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        (async () => {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                await conversation.startSession({ agentId: AGENT_ID, connectionType: 'webrtc' });
            } catch {
                onClose();
            }
        })();
        return () => {
            document.body.style.overflow = '';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const endCall = () => conversation.endSession();

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                onClick={(e) => { if (e.target === e.currentTarget) endCall(); }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-sm bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center gap-6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative"
                >
                    <button onClick={endCall} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
                        <PhoneOff className="w-5 h-5" />
                    </button>

                    <div className="relative flex items-center justify-center">
                        {(uiStatus === 'connected' && conversation.isSpeaking) && (
                            <motion.div
                                className="absolute w-28 h-28 rounded-full bg-accent-blue/30"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 1.4, repeat: Infinity }}
                            />
                        )}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/40">
                            {uiStatus === 'requesting' ? (
                                <Loader2 className="w-10 h-10 text-white animate-spin" />
                            ) : uiStatus === 'connected' ? (
                                conversation.isSpeaking ? (
                                    <Mic className="w-10 h-10 text-white" />
                                ) : (
                                    <MicOff className="w-10 h-10 text-white/60" />
                                )
                            ) : (
                                <Phone className="w-10 h-10 text-white" />
                            )}
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-white font-semibold text-lg">Kaizen</p>
                        <p className="text-white/50 text-sm mt-0.5">Ingeniero Virtual · Ingentia</p>
                    </div>

                    <div className="text-center min-h-[24px]">
                        {uiStatus === 'requesting' && <p className="text-white/60 text-sm animate-pulse">Conectando…</p>}
                        {uiStatus === 'connected' && <p className="text-white/60 text-sm">{conversation.isSpeaking ? 'Kaizen está hablando…' : 'Escuchando…'}</p>}
                        {uiStatus === 'disconnected' && <p className="text-white/40 text-sm">Sesión finalizada</p>}
                    </div>

                    {uiStatus === 'connected' && (
                        <button onClick={endCall} className="flex items-center gap-2 bg-red-600/80 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
                            <PhoneOff className="w-4 h-4" />
                            Finalizar llamada
                        </button>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
