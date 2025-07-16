from PIL import Image

def jpg_to_pdf(jpg_path, pdf_path):
    image = Image.open(jpg_path)
    image.convert("RGB").save(pdf_path)

# Example usage
jpg_to_pdf("image2.jpg", "image2.pdf")
