# DEEP Learning Class

### Tensorflow Low
- Linear regression
- Logistic regression (binary classification)
- SoftMax (multiple classification)
- Basic Deep layers

### Tensorflow High (Keras)
- Linear regression
- Logistic regression (binary classification)
- SoftMax (multiple classification)
- Basic Deep layers
- CNN

### Pytorch Low
- Linear regression
- Logistic regression (binary classification)
- SoftMax (multiple classification)
- Basic Deep layers

### Pytorch High
- Linear regression
- Logistic regression (binary classification)
- SoftMax (multiple classification)
- Basic Deep layers
- CNN

### Utils
- DataLoader
-   - tensorflow
-   - pytorch


```
.
├── 00_ideas
│   ├── Concepts.md
│   ├── __basic_optimizing
│   │   ├── 01_cost.ipynb
│   │   ├── 02_gradient.ipynb
│   │   ├── 03_gradient_numpy.ipynb
│   │   └── 04_gradient_numpy.ipynb
│   └── __concepts
│       ├── _classification.ipynb
│       ├── _cost.ipynb
│       ├── _logisitc.ipynb
│       ├── _normalizing.ipynb
│       ├── _py_class.ipynb
│       ├── _sklearn_deep.ipynb
│       ├── _softmax.ipynb
│       ├── _train_test.ipynb
│       ├── _xor.ipynb
│       ├── _xor_prob.ipynb
│       └── _xor_prob_solution.ipynb
├── 00_pr_self
│   ├── hw_1.ipynb
│   ├── hw_2.ipynb
│   ├── hw_2_torch.ipynb
│   ├── hw_3.ipynb
│   ├── hw_4_breast_cancer.ipynb
│   ├── hw_4_tf_keras_fashion_mnist.ipynb
│   ├── hw_5_tf_lowhigh_torchlowhigh.ipynb
│   ├── hw_8_team3.ipynb
│   ├── project_modeling.ipynb
│   ├── z_TEAM3.ipynb
│   ├── z_self_.ipynb
│   ├── z_team3_pr.ipynb
│   └── z_team_3.ipynb
├── 01_baseline
│   ├── _pytorch
│   │   ├── 01_torch_batch.ipynb
│   │   ├── 02_torch_early_stopping.ipynb
│   │   ├── 1_tensor_structure
│   │   │   └── torch_tensor_structures.ipynb
│   │   └── 2_basic_optimizing
│   │       ├── 02_toch_gradient.ipynb
│   │       ├── 03_torch_linear_reg.ipynb
│   │       ├── 03_torch_linear_reg_high.ipynb
│   │       ├── 04_torch_multi_linear_reg.ipynb
│   │       ├── 05_torch_logistic.ipynb
│   │       ├── 06_torch_logistic_high.ipynb
│   │       ├── 07_torch_multi_classification.ipynb
│   │       ├── 07_torch_multi_classification_high.ipynb
│   │       ├── 08_xor_torch.ipynb
│   │       ├── 08_xor_torch_sol.ipynb
│   │       ├── 08_xor_torch_sol_high.ipynb
│   │       └── 09_torch_class_based.ipynb
│   └── _tensorflow
│       ├── 1_tensor_structure
│       │   └── tf_tensor_structures.ipynb
│       └── 2_basic_optimizing
│           ├── 00_method_keras_model.ipynb
│           ├── 01_tf_cost.ipynb
│           ├── 02_tf_gradient.ipynb
│           ├── 03_tf_linear_reg_.ipynb
│           ├── 04_keras_multi_linear.ipynb
│           ├── 04_tf_multi_linear_matmul.ipynb
│           ├── 04_tf_multi_linear_reg.ipynb
│           ├── 05_tf_logistic.ipynb
│           ├── 06_tf_logistic_high.ipynb
│           ├── 07_tf_multi_classification.ipynb
│           ├── 07_tf_multi_classification_high.ipynb
│           ├── 08_xor_tensorflow_high.ipynb
│           ├── 09_tf_keras_model_load.ipynb
│           ├── 09_tf_keras_model_save.ipynb
│           ├── 10_tf_early_stopping.ipynb
│           ├── 10_tf_l1_l2_regulation.ipynb
│           ├── 10_tf_optimize_.ipynb
│           └── 11_tf_ensemble(voting).ipynb
├── 02_image
│   ├── README.md
│   ├── _pytorch
│   │   └── base_line
│   │       ├── 01_torch_cnn_basic.ipynb
│   │       ├── 01_torch_cnn_class.ipynb
│   │       └── 01_torch_mnist.ipynb
│   └── _tensorflow
│       ├── 01_tf_keras_mnist.ipynb
│       ├── 01_tf_keras_mnist_cnn.ipynb
│       ├── 01_tf_keras_mnist_flattened.ipynb
│       ├── 03_tf_keras_load_model.ipynb
│       ├── 03_tf_keras_save_model.ipynb
│       ├── 04_tf_transfer_learning.ipynb
│       ├── 05_tf_data_augmentation.ipynb
│       ├── 49.imageMake(케라스).ipynb
│       ├── finger.h5
│       └── tf_vgg_model.ipynb
├── 03_object_detection
│   ├── checker.ipynb
│   ├── hw_8_team3.ipynb
│   ├── ob_detection copy.ipynb
│   └── yolo_v4_tf_keras
│       ├── LICENSE
│       ├── README.md
│       ├── __pycache__
│       │   ├── config.cpython-39.pyc
│       │   ├── custom_layers.cpython-39.pyc
│       │   ├── loss.cpython-39.pyc
│       │   ├── models.cpython-39.pyc
│       │   └── utils.cpython-39.pyc
│       ├── asset
│       │   └── pred.png
│       ├── class_names
│       │   ├── bccd_classes.txt
│       │   ├── classes.txt
│       │   └── coco_classes.txt
│       ├── config.py
│       ├── custom_callbacks.py
│       ├── custom_layers.py
│       ├── eval
│       │   ├── ground_truth
│       │   ├── json
│       │   ├── pred_result
│       │   └── result
│       ├── img
│       │   ├── street.jpeg
│       │   ├── test.jpg
│       │   ├── test2.jpg
│       │   ├── test3.jpg
│       │   └── test6.jpg
│       ├── loss.py
│       ├── models.py
│       ├── notebook
│       │   ├── Inference-colab.ipynb
│       │   ├── Inference.ipynb
│       │   └── train.ipynb
│       ├── ob_detection.ipynb
│       ├── play.mp4
│       ├── street_view.jpg
│       ├── temp.jpeg
│       ├── utils.py
│       ├── videotest.py
│       ├── xml_to_txt.py
│       └── yolov4.weights
├── 04_opencv
│   ├── 01_cvtest_imshow.py
│   ├── 02_cvtest_videocaputre.py
│   ├── play.mp4
│   └── temp.mp4
├── 09_info
│   ├── settings.txt
│   └── version.txt
├── 09_mini_project
│   └── 02_image_classification
│       ├── 01_img_crawling.ipynb
│       ├── 02_tf_cnn.ipynb
│       └── 02_torch_cnn.ipynb
├── 09_selenium
│   └── _selenium_ver.py
├── README.md
└── todo.md

32 directories, 124 files
```
