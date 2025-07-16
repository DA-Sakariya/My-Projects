from PIL import Image

# Open the JPG image
image = Image.open("image4.jpg")

# Convert to RGB mode (if not already)
image = image.convert("RGB")

# Save as PDF
image.save("image4.pdf")

print("JPG successfully converted to PDF!")