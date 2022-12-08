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
- CNN => todo

```
    .
├── 00_ideas
│   ├── Concepts.md
│   ├── __basic_optimizing
│   │   ├── 01_cost.ipynb
│   │   ├── 02_gradient.ipynb
│   │   ├── 03_gradient_numpy.ipynb
│   │   └── 04_gradient_numpy.ipynb
│   └── __concepts
│       ├── _classification.ipynb
│       ├── _cost.ipynb
│       ├── _logisitc.ipynb
│       ├── _normalizing.ipynb
│       ├── _py_class.ipynb
│       ├── _sklearn_deep.ipynb
│       ├── _softmax.ipynb
│       ├── _train_test.ipynb
│       ├── _xor.ipynb
│       ├── _xor_prob.ipynb
│       └── _xor_prob_solution.ipynb
├── 00_pr_self
│   ├── hw_1.ipynb
│   ├── hw_2.ipynb
│   ├── hw_2_torch.ipynb
│   ├── hw_3.ipynb
│   ├── hw_4_breast_cancer.ipynb
│   ├── hw_4_tf_keras_fashion_mnist.ipynb
│   ├── hw_5_tf_lowhigh_torchlowhigh.ipynb
│   ├── project_modeling.ipynb
│   ├── z_TEAM3.ipynb
│   ├── z_self_.ipynb
│   ├── z_team3_pr.ipynb
│   └── z_team_3.ipynb
├── 01_baseline
│   ├── _pytorch
│   │   ├── 1_tensor_structure
│   │   │   └── torch_tensor_structures.ipynb
│   │   └── 2_basic_optimizing
│   │       ├── 02_toch_gradient.ipynb
│   │       ├── 03_torch_linear_reg.ipynb
│   │       ├── 03_torch_linear_reg_high.ipynb
│   │       ├── 04_torch_multi_linear_reg.ipynb
│   │       ├── 05_torch_logistic.ipynb
│   │       ├── 06_torch_logistic_high.ipynb
│   │       ├── 07_torch_multi_classification.ipynb
│   │       ├── 07_torch_multi_classification_high.ipynb
│   │       ├── 08_xor_torch.ipynb
│   │       ├── 08_xor_torch_sol.ipynb
│   │       ├── 08_xor_torch_sol_high.ipynb
│   │       └── 09_torch_class_based.ipynb
│   └── _tensorflow
│       ├── 1_tensor_structure
│       │   └── tf_tensor_structures.ipynb
│       └── 2_basic_optimizing
│           ├── 00_method_keras_model.ipynb
│           ├── 01_tf_cost.ipynb
│           ├── 02_tf_gradient.ipynb
│           ├── 03_tf_linear_reg_.ipynb
│           ├── 04_keras_multi_linear.ipynb
│           ├── 04_tf_multi_linear_matmul.ipynb
│           ├── 04_tf_multi_linear_reg.ipynb
│           ├── 05_tf_logistic.ipynb
│           ├── 06_tf_logistic_high.ipynb
│           ├── 07_tf_multi_classification.ipynb
│           ├── 07_tf_multi_classification_high.ipynb
│           └── 08_xor_tensorflow_high.ipynb
├── 02_image
│   ├── README.md
│   ├── _pytorch
│   │   └── base_line
│   │       ├── 01_torch_cnn_basic.ipynb
│   │       ├── 01_torch_cnn_class.ipynb
│   │       └── 01_torch_mnist.ipynb
│   └── _tensorflow
│       ├── 01_tf_keras_mnist.ipynb
│       ├── 01_tf_keras_mnist_cnn.ipynb
│       ├── 01_tf_keras_mnist_flattened.ipynb
│       ├── 02_tf_keras_model_load.ipynb
│       ├── 02_tf_keras_model_save.ipynb
│       ├── 03_tf_keras_load_model.ipynb
│       ├── 03_tf_keras_save_model.ipynb
│       ├── 04_transfer_learning.ipynb
│       ├── catdog.h5
│       ├── finger.h5
│       └── tf_vgg_model.ipynb
├── 09_info
│   ├── settings.txt
│   └── version.txt
├── 09_mini_project
│   └── 01_deep_learning_dashboard
│       ├── Fetal.py
│       ├── Pytorch_high.html
│       ├── Pytorch_low.html
│       ├── TensorFlow.html
│       ├── TensorFlow_keras.html
│       ├── assets
│       │   ├── demo
│       │   │   ├── Pytorch_high_chart_area.js
│       │   │   ├── Pytorch_low_chart_area.js
│       │   │   ├── Tensor_chart_area.js
│       │   │   ├── Tensor_keras_chart_area.js
│       │   │   ├── chart-area-demo.js
│       │   │   ├── chart-bar-demo.js
│       │   │   ├── chart-pie-demo.js
│       │   │   └── datatables-demo.js
│       │   └── img
│       │       └── error-404-monochrome.svg
│       ├── charts.html
│       ├── css
│       │   ├── bootstrap-icons.css
│       │   ├── bootstrap.min.css
│       │   ├── owl.carousel.min.css
│       │   ├── owl.theme.default.min.css
│       │   ├── styles.css
│       │   └── templatemo-medic-care.css
│       ├── fetal_health.html
│       ├── first.html
│       ├── fonts
│       │   ├── bootstrap-icons.woff
│       │   └── bootstrap-icons.woff2
│       ├── images
│       │   ├── gallery
│       │   │   ├── female-doctor-with-presenting-hand-gesture.jpg
│       │   │   └── medium-shot-man-getting-vaccine.jpg
│       │   ├── modeling
│       │   │   ├── tf_high_conf_test.png
│       │   │   ├── tf_high_conf_train.png
│       │   │   ├── tf_low_conf_test.png
│       │   │   ├── tf_low_conf_train.png
│       │   │   ├── torch_high_conf_test.png
│       │   │   ├── torch_high_conf_train.png
│       │   │   ├── torch_low_conf_test.png
│       │   │   └── torch_low_conf_train.png
│       │   ├── reviews
│       │   │   ├── beautiful-woman-face-portrait-brown-background.jpeg
│       │   │   ├── portrait-british-woman.jpeg
│       │   │   ├── senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg
│       │   │   └── woman-wearing-mask-face-closeup-covid-19-green-background.jpeg
│       │   └── slider
│       │       ├── 110540428.png
│       │       └── 110540429.png
│       ├── index.html
│       ├── js
│       │   ├── bootstrap.bundle.min.js
│       │   ├── custom.js
│       │   ├── datatables-simple-demo.js
│       │   ├── jquery.min.js
│       │   ├── owl.carousel.min.js
│       │   ├── scripts.js
│       │   └── scrollspy.min.js
│       └── tables.html
├── 09_selenium
│   └── _selenium_ver.py
├── 99_raw_data
│   ├── 2014년 졸음운전 교통사고.csv
│   ├── 2015년 졸음운전 교통사고.csv
│   ├── 2016년 졸음운전 교통사고.csv
│   ├── Boston.csv
│   ├── BostonHousing.csv
│   ├── CCTV_in_Seoul.csv
│   ├── a.html
│   ├── aa.txt
│   ├── action.txt
│   ├── bb.txt
│   ├── births.txt
│   ├── cars.csv
│   ├── chartData.csv
│   ├── crime_in_Seoul.csv
│   ├── daily-min-temperatures.csv
│   ├── daily-total-female-births.txt
│   ├── data-01.csv
│   ├── diabetes.csv
│   ├── diabetes1.csv
│   ├── electric.csv
│   ├── emp.txt
│   ├── grade.csv
│   ├── hotel.xlsx
│   ├── international-airline-passengers.txt
│   ├── k.txt
│   ├── kdata.xlsx
│   ├── myimg
│   │   ├── cat
│   │   │   ├── cat1.jpg
│   │   │   ├── cat10.jpg
│   │   │   ├── cat2.jpg
│   │   │   ├── cat3.jpg
│   │   │   ├── cat4.jpg
│   │   │   ├── cat5.jpg
│   │   │   ├── cat6.jpg
│   │   │   ├── cat7.jpg
│   │   │   ├── cat8.jpg
│   │   │   └── cat9.jpg
│   │   ├── dog
│   │   │   ├── dog1.jpg
│   │   │   ├── dog10.jpg
│   │   │   ├── dog2.jpg
│   │   │   ├── dog3.jpg
│   │   │   ├── dog4.jpg
│   │   │   ├── dog5.jpg
│   │   │   ├── dog6.jpg
│   │   │   ├── dog7.jpg
│   │   │   ├── dog8.jpg
│   │   │   └── dog9.jpg
│   │   ├── mug.jpg
│   │   └── test.jpg
│   ├── passenger.txt
│   ├── pima-indians-diabetes.data.csv
│   ├── sample.csv
│   ├── sample1.csv
│   ├── simple1.txt
│   ├── simple2.txt
│   ├── softmax.txt
│   ├── sonar.csv
│   ├── song.xml
│   ├── test.csv
│   ├── titanic.csv
│   ├── titanic1.csv
│   ├── trees.csv
│   ├── weight.csv
│   ├── wine.csv
│   ├── wordtovec.csv
│   ├── x_square.txt
│   └── 도로교통공단_전국_사망교통사고정보(2018).csv
├── README.md
├── tf_l1_l2_regulation.ipynb
└── todo.md

34 directories, 191 files
```
