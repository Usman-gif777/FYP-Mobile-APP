import os

# Base project folder
base_dir = "fyp-mobile"

# Folder structure
folders = [
    "src/api",
    "src/components",
    "src/screens",
    "src/navigation",
    "src/context",
    "src/hooks",
    "src/utils",
    "src/types",
    "src/styles"
]

# Files to create
files = [
    "App.tsx",
    "app.json",
    "package.json"
]

# Create base directory
os.makedirs(base_dir, exist_ok=True)

# Create folders
for folder in folders:
    path = os.path.join(base_dir, folder)
    os.makedirs(path, exist_ok=True)

# Create files
for file in files:
    file_path = os.path.join(base_dir, file)
    with open(file_path, "w") as f:
        f.write("")  # empty file

print("✅ Project structure created successfully!")