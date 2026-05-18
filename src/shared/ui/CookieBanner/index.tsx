import { useCookieBanner } from '@/entities/CookieBanner/useCookieBanner';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

export const CookieBanner: React.FC = () => {
  const [open, setOpen] = useState(false);
  const {
    data: dataText,
    isLoading: isLoadingText,
    isSuccess: isSuccessText,
  } = useCookieBanner();

  useEffect(() => {
    const isConsent = localStorage.getItem('consent-was-given');

    if (isConsent === 'allowed') {
      return;
    }

    const refTimeout = setTimeout(() => {
      setOpen(true);
      clearTimeout(refTimeout);
    }, 1200);
  }, []);

  const openChange = () => {
    setOpen(false);
    localStorage.setItem('consent-was-given', 'allowed');
  };

  return (
    <Dialog
      open={open && !isLoadingText}
      onOpenChange={openChange}
      modal={false}>
      <DialogPortal>
        <DialogOverlay className="pointer-events-none" />
        <DialogContent
          className="pointer-events-auto fixed right-[2%] bottom-[2%] z-[999] max-h-[85vh] w-[90vw] max-w-[500px] rounded-lg border border-[var(--color-accent-foreground)]/20 bg-[var(--color-background)] p-[25px] shadow-lg"
          onInteractOutside={event => {
            event.preventDefault();
          }}
          onEscapeKeyDown={event => {
            event.preventDefault();
          }}>
          <DialogTitle className="m-0 text-xl font-medium">
            Использование файлов cookie
          </DialogTitle>
          <DialogDescription className="mt-[10px] mb-[20px] text-[17px] leading-[1.5]">
            {isSuccessText &&
              dataText?.map(item => (
                <span
                  key={item.id}
                  dangerouslySetInnerHTML={{ __html: item.textHtml }}
                />
              ))}
          </DialogDescription>
          <div className="mt-[25px] flex justify-end">
            <DialogClose asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded border border-[var(--color-accent-foreground)]/30 px-[15px] text-[17px] transition duration-[600ms] select-none hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]/50">
                Ок
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
