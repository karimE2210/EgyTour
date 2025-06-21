# ReviewsDisplay Component

A responsive component for displaying user reviews in a compact, mobile-friendly format.

## Features

- **Responsive Design**: Optimized for small screens and mobile devices
- **Authentication Aware**: Automatically handles user authentication state
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Displays error messages when data fails to load
- **Empty States**: Shows helpful message when no reviews exist
- **Configurable**: Customizable number of reviews and header visibility
- **Smart Date Formatting**: Shows relative dates (e.g., "2 days ago", "1 week ago")
- **Star Ratings**: Visual star rating display with numerical score
- **Truncated Comments**: Limits comment length to prevent layout issues

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes for styling |
| `maxReviews` | `number` | `5` | Maximum number of reviews to display |
| `showHeader` | `boolean` | `true` | Whether to show the header with title |

## Usage Examples

### Basic Usage
```tsx
import ReviewsDisplay from '@/components/shared/reviews-display';

<ReviewsDisplay />
```

### Compact Version (3 reviews max)
```tsx
<ReviewsDisplay maxReviews={3} />
```

### Without Header
```tsx
<ReviewsDisplay showHeader={false} />
```

### Custom Styling
```tsx
<ReviewsDisplay 
  maxReviews={3} 
  showHeader={false}
  className="shadow-lg border-2"
/>
```

### In Dashboard
```tsx
<ReviewsDisplay maxReviews={10} showHeader={false} />
```

### In Destination Pages
```tsx
<div className="max-w-md">
  <ReviewsDisplay 
    maxReviews={3} 
    showHeader={false}
    className="shadow-lg"
  />
</div>
```

## States

### Authenticated User with Reviews
- Shows user's reviews with star ratings and comments
- Displays relative dates
- Shows review count badge in header

### Authenticated User without Reviews
- Shows empty state with encouraging message
- Displays icon and helpful text

### Unauthenticated User
- Shows sign-in prompt
- Displays message to encourage authentication

### Loading State
- Shows spinning loader
- Indicates data is being fetched

### Error State
- Shows error message
- Allows for retry functionality

## Integration

The component automatically:
- Fetches reviews from `/api/user/reviews`
- Handles authentication via NextAuth session
- Updates when user authentication state changes
- Manages loading and error states internally

## Styling

The component uses Tailwind CSS classes and can be customized with:
- Custom `className` prop
- Tailwind utility classes
- CSS custom properties for theming

## Accessibility

- Proper ARIA labels for star ratings
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly 