# followed another tutorial to help me understand the concepts behind this pattern.

import types

class StrategyExample(object):

    def __init__(self, func=None):
        if func is not None:
            # this is a way of binding the function to this instance, something I haven't worked with before but I enjoyed learning how it works
            self.execute = types.MethodType(func, self)
            self.name = '{}_{}'.format(self.__class__.__name__, func.__name__)
        else:
            self.name = '{}_default'.format(self.__class__.__name__)

    def execute(self):
        print('Default method')
        print('{}\n'.format(self.name))

#Give user options of different algorithms to choose from to complete their given task
def execute_replacement1(self): 
   print('Replacement1 Strategy')
   print('{}\n'.format(self.name))

def execute_replacement2(self):
   print('Replacement2 Strategy')
   print('{}\n'.format(self.name))

def main():

    strategy0 = StrategyExample()
    strategy0.execute()

    strat1 = StrategyExample(execute_replacement1)
    strat1.execute()

    strat2 = StrategyExample(execute_replacement2)
    strat2.execute()

if __name__ == '__main__':
    main()