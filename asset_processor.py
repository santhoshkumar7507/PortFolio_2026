import os
import sys
from PIL import Image, ImageEnhance, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def process_resume(input_img_path):
    print(f"--- Processing: {input_img_path} ---")
    
    # 1. Open and Enhance
    img = Image.open(input_img_path).convert('RGB')
    
    # 2. Smart Crop (Remove Black/Dark Borders)
    gray = img.convert('L')
    mask = gray.point(lambda p: 255 if p > 40 else 0)
    bbox = mask.getbbox()
    if bbox:
        img = img.crop(bbox)
        print("Done: Smart Crop")

    # 3. Professional Enhancements (High Clarity)
    img = ImageEnhance.Contrast(img).enhance(1.1)
    img = ImageEnhance.Sharpness(img).enhance(2.5) # Increased for better text clarity
    print("Done: High-Clarity Visual Enhancement")

    # 4. Save high-quality PNG
    png_path = "public/santhosh_resume.png"
    img.save(png_path, "PNG", quality=100, optimize=True)
    print(f"Saved: {png_path}")

    # 5. Convert to High-Clarity PDF (300 DPI)
    pdf_path = "public/santhosh_resume.pdf"
    img.save(pdf_path, "PDF", resolution=300.0)
    print(f"Saved: {pdf_path}")
    
    print("\n[SUCCESS] Your resume assets are now impressive and ready!")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        process_resume(sys.argv[1])
    else:
        print("Usage: python asset_processor.py <path_to_resume_image>")
