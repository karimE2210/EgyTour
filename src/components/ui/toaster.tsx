"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

/* 🍞 TOASTER COMPONENT */
export function Toaster() {
  /* 
    ⬆️ EDIT HERE TO CHANGE TOASTER BEHAVIOR:
    - This component provides toast notifications
    - Uses the useToast hook for managing toasts
  */

  const { toasts } = useToast()

  return (
    <ToastProvider>
      {/* 
        ⬆️ EDIT HERE TO CHANGE TOAST PROVIDER:
        - ToastProvider wraps the entire toast system
        - Manages toast state and animations
      */}
      
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {/* 
              ⬆️ EDIT HERE TO CHANGE TOAST STYLE:
              - Each toast is rendered as a Toast component
              - Props are spread to customize appearance
            */}
            
            <div className="grid gap-1">
              {/* 
                ⬆️ EDIT HERE TO CHANGE TOAST LAYOUT:
                - grid gap-1 = spacing between elements
              */}
              
              {title && <ToastTitle>{title}</ToastTitle>}
              {/* 
                ⬆️ EDIT HERE TO CHANGE TITLE:
                - ToastTitle = bold heading
                - Optional title text
              */}
              
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
              {/* 
                ⬆️ EDIT HERE TO CHANGE DESCRIPTION:
                - ToastDescription = regular text
                - Optional description text
              */}
            </div>
            
            {action}
            {/* 
              ⬆️ EDIT HERE TO CHANGE ACTION:
              - Optional action button
              - Usually used for undo/retry
            */}
            
            <ToastClose />
            {/* 
              ⬆️ EDIT HERE TO CHANGE CLOSE BUTTON:
              - ToastClose = dismiss button
              - Always shown in top-right
            */}
          </Toast>
        )
      })}
      
      <ToastViewport />
      {/* 
        ⬆️ EDIT HERE TO CHANGE VIEWPORT:
        - ToastViewport = container for toasts
        - Controls positioning and stacking
      */}
    </ToastProvider>
  )
} 