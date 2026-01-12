import React from 'react'
export const NetworkStatus = () => {
    const [isOnline, setIsOnline] = React.useState<boolean>(navigator.onLine)
    const [prevIsOnline, setPrevIsOnline] = React.useState<boolean>(true)
    const [open, setOpen] = React.useState<boolean>(true)
    const [message, setMassage] = React.useState<string>('Offline')

    React.useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
            if (!prevIsOnline) {
                setMassage('online')
                setOpen(true)
            }
            setPrevIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
            if (prevIsOnline) {
                setMassage('Offline')
                setOpen(true)
            }
            setPrevIsOnline(false)
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return () => {
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffline)
        }
    }, [prevIsOnline])

    React.useEffect(() => {
        if (!open) return;
        const timer = setTimeout(() => {
            setOpen(false)
        }, 5000);
        return ()=> clearTimeout(timer)

    }, [open])

    return (
        <>
            {open && <div className={`fixed bottom-0 w-full right-0 flex justify-center items-center text-white z-10 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}>
                {isOnline ? 'Online' : 'Offline'}
            </div>}
        </>

    )
}