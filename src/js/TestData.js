export default {
  nodes () {
    return {
      nodes: [
        {
          name: "TEST_NODE_1",
          type: "ENTRY",
          id: "9E19BC77-43D0-2831-BAFA-4EDA2B96B9E1",
          description: "测试节点1",
          content: "测试节点内容描述",
          edges: [
            {
              to: "479A31BE-B4F0-736D-66A5-BA26E4CAA973",
              condition: []
            },
            {
              to: "D9AE0E1C-2506-E88E-EE0F-F51B972D513A",
              condition: []
            },
            {
              to: "EA3C414E-96BA-E16F-F4D3-3EE4B95E07C1",
              condition: []
            },
            {
              to: "5BCA7BDD-A9CF-135F-2C00-A2B03134B9B7",
              condition: []
            }
          ]
        },
        {
          name: "TEST_NODE_2",
          type: "EXIT",
          id: "479A31BE-B4F0-736D-66A5-BA26E4CAA973",
          description: "测试节点2",
          content: "测试节点内容描述",
          edges: []
        },
        {
          name: "TEST_NODE_3",
          type: "EXIT",
          id: "D9AE0E1C-2506-E88E-EE0F-F51B972D513A",
          description: "测试节点3",
          content: "测试节点内容描述",
          edges: [{
            to: "479A31BE-B4F0-736D-66A5-BA26E4CAA973",
            condition: []
          }]
        },
        {
          name: "TEST_NODE_4",
          type: "ENTRY",
          id: "EA3C414E-96BA-E16F-F4D3-3EE4B95E07C1",
          description: "测试节点4",
          content: "测试节点内容描述",
          edges: [
            {
              to: "5BCA7BDD-A9CF-135F-2C00-A2B03134B9B7",
              condition: []
            }
          ]
        }, {
          name: "TEST_NODE_5",
          type: "IF",
          id: "5BCA7BDD-A9CF-135F-2C00-A2B03134B9B7",
          description: "测试节点5",
          content: "测试节点内容描述",
          edges: [
            {
              to: "D9AE0E1C-2506-E88E-EE0F-F51B972D513A",
              condition: ['YES']
            },
            {
              to: "5BCA7BDD-A9CF-135F-2C00-A2B03134B9B7",
              condition: []
            }
          ]
        }, {
          name: "TEST_NODE_6",
          type: "IF",
          id: "ABCA7BDD-A9CF-135F-2C00-A2B03134B9B8",
          description: "测试节点6",
          content: "测试节点内容描述",
          edges: [
            {
              to: "D9AE0E1C-2506-E88E-EE0F-F51B972D513A",
              condition: ['YES']
            },
            {
              to: "5BCA7BDD-A9CF-135F-2C00-A2B03134B9B7",
              condition: []
            }
          ]
        }
      ]
    }

  },
  layouts () {
    return {
      "9E19BC77-43D0-2831-BAFA-4EDA2B96B9E1": {
        position: {
          top: 110,
          left: 220
        }
      },
      "479A31BE-B4F0-736D-66A5-BA26E4CAA973": {
        position: {
          top: 460,
          left: 650
        }
      },
      "D9AE0E1C-2506-E88E-EE0F-F51B972D513A": {
        position: {
          top: 240,
          left: 660
        }
      },
      "EA3C414E-96BA-E16F-F4D3-3EE4B95E07C1": {
        position: {
          top: 560,
          left: 240
        }
      },
      "5BCA7BDD-A9CF-135F-2C00-A2B03134B9B7": {
        position: {
          top: 300,
          left: 400
        }
      },
      "ABCA7BDD-A9CF-135F-2C00-A2B03134B9B8": {
        position: {
          top: 700,

        }
      }
    }
  }
}
