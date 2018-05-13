features_list = []
y_list = []
imnames_list = []
objectid_list = []

for index, row in df.iterrows():
    try:
        features_list.append(image_manipulation(row['path']))
        y_list.append(row['bodyclass1'])
        imnames_list.append(row['path'])
        objectid_list.append(row['objectID'])
    except OSError:
       continue