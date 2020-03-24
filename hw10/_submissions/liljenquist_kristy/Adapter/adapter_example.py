# Adapter pattern shows how charging your phone in a different country requires an adapter
# I followed examples online in order to increase my understanding of an adapter as a design pattern
# these concepts have been pretty new to me, but I am learning lots from this exercise of implementing patterns into code
class Phone(object):

    max_input_voltage = 5

    @classmethod
    def outcome(cls, input_voltage):
        if input_voltage > cls.max_input_voltage:
            print("input voltage: {}V -- fried".format(input_voltage))
        else:
            print("input voltage: {}V -- charging...".format(input_voltage))

    def charge(self, input_voltage):
        self.outcome(input_voltage)

class Outlet(object):
    output_voltage = None

class AUSocket(Outlet):
    output_voltage = 230

class USSocket(Outlet):
    output_voltage = 120

## Create an Adapter for the different types of outlets
class AUAdapter(object):
    input_voltage = AUSocket.output_voltage
    output_voltage = Phone.max_input_voltage


# Create a system for the phone and socket
class CannotTransformVoltage(Exception):
    pass

class PhoneAdapter(Phone, Outlet):

    @classmethod
    def transform_voltage(cls, input_voltage):
        if input_voltage == cls.output_voltage:
            return cls.max_input_voltage
        else:
            raise CannotTransformVoltage(
                "cannot transform."
        )

    @classmethod
    def charge(cls, input_voltage):
        try:
            voltage = cls.transform_voltage(input_voltage)
            cls.outcome(voltage)
        except CannotTransformVoltage as e:
            print(e)


class PhoneAUAdapter(Phone, AUSocket):
    pass

class PhoneUSAdapter(Phone, USSocket):
    pass