import cv2

img = cv2.imread('../09_mini_project/02_image_classification/img_data/lion/lion_1.jpg')
cv2.imshow('test', img)
cv2.waitKey(0)
cv2.destroyAllWindows()

# 1000 => 1sec
# 0 => any keyboard
