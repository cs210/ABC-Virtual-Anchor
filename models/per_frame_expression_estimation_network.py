import torch
import torch.nn as nn
import numpy as np 

class PerFrameExpressNet(nn.Module):
    def __init__(self, depth, widen_factor, dropout_rate, num_classes, capture_forward=False):
        super(PerFrameExpressNet, self).__init__()
        self.in_planes = 16

        self.conv1 = nn.Conv2d()
        self.conv2 = 
        self.conv3
        self.conv4

        self.fc1 = nn.Linear(64, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 32)

    def forward(self, x):
        # x, capture_forward, activation,layer = input_x[0], input_x[1],input_x[2], input_x[3]
        activation = None
        out = self.conv1(x[0])
        
        x[0] = out
        out = x 

        out = self.layer1(out)
        out = self.layer2(out)
        out = self.layer3(out)
        
        if out[2] is not None:
            activation = out[2]


        out = out[0] 
        
        out = F.relu(self.bn1(out))
        out = F.avg_pool2d(out, 8)
        out = out.view(out.size(0), -1)
        out = self.linear(out)

        return out, activation