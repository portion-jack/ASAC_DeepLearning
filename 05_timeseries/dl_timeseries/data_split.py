import numpy as np
def split_xy1(dataset, time_steps):
    x, y = list(), list()
    for i in range(len(dataset)):
        end_number = i + time_steps
        if end_number > len(dataset) -1:
            break
        tmp_x, tmp_y = dataset[i:end_number], dataset[end_number]
        x.append(tmp_x)
        y.append(tmp_y)
    return np.array(x), np.array(y)


def split_xy2(dataset, time_steps, y_column):
    x, y = list(), list()
    for i in range(len(dataset)):
        x_end_number = i + time_steps
        y_end_number = x_end_number + y_column # 추가
        # if end_number > len(dataset) -1:
        # break
        if y_end_number > len(dataset): # 수정
            break
        tmp_x = dataset[i : x_end_number]
        tmp_y = dataset[x_end_number : y_end_number] # 수정
        x.append(tmp_x)
        y.append(tmp_y)
    return np.array(x), np.array(y)



def make_dataset(data, label, window_size=20):
    feature_list = []
    label_list = []
    for i in range(len(data) - window_size):
        feature_list.append(np.array(data.iloc[i:i+window_size]))
        label_list.append(np.array(label.iloc[i+window_size]))
    return np.array(feature_list), np.array(label_list)