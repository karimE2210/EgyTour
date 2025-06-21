# 360° Images Directory

This directory contains equirectangular panoramic images used for VR experiences in the EgyTour application.

## Required Images

- `pyramid-interior.jpg`: Interior view of the Great Pyramid
  - Resolution: Minimum 4096x2048 pixels
  - Format: Equirectangular projection
  - Quality: High quality JPEG (80% or higher)
  - Content: Should show the interior chamber/corridor of the Great Pyramid

## Image Requirements

1. **Format**: 
   - Equirectangular projection (360° x 180°)
   - 2:1 aspect ratio
   - JPEG format for web optimization

2. **Resolution**:
   - Minimum: 4096x2048 pixels
   - Recommended: 6144x3072 pixels
   - Maximum: 8192x4096 pixels

3. **Quality**:
   - JPEG quality: 80% or higher
   - File size: Optimize for web (max 5MB per image)
   - No visible compression artifacts

4. **Technical Requirements**:
   - Proper stitching with no visible seams
   - Correct horizon alignment
   - Good exposure and contrast
   - Sharp focus throughout

## Usage Notes

- Images are loaded by A-Frame's `<a-sky>` component
- Rotation is set to `0 -90 0` to align the initial view
- Images should be properly leveled horizontally
- Consider mobile bandwidth when optimizing file sizes 