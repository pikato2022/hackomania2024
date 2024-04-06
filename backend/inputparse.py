import json

#powerstation class
class PowerStation():

    # def __init__(self, kWout, RatioRenewable, SourcesIndex):
    def __init__(self, kWout, RatioRenewable):
        self.kWout = kWout
        self.RatioRenewable = RatioRenewable
        # self.SourcesIndex = SourcesIndex

#sourcesindex class, to go with powerstation
class SourcesIndex():
    def __init__(self, Gas, Solar, Imports, GridStorage):
        self.Gas = Gas 
        self.Solar = Solar 
        self.Imports = Imports
        self.GridStorage = GridStorage

#weather class
class Weather():
    def __init__(self, temperature, heatindex, sunlight, humidity, wind):
        self.temperature = temperature
        self.heatindex = heatindex
        self.sunlight = sunlight
        self.humidity = humidity
        self.wind = wind

#utilities class
class Utilities():
    def __init__(self, kWin):
        self.kWin = kWin

#house class
class House():
    def __init__(self, aircon, lighting, kitchen, multiplug, miscellaneous):
        self.aircon = aircon
        self.lighting = lighting
        self.kitchen = kitchen
        self.multiplug = multiplug
        self.miscellaneous = miscellaneous
    


#parse PowerStation1.json
with open('PowerStation1.json') as ps:
    
    ps1 = json.load(ps)
    
    ps2 = ps1['power_station']

    # print(f"kWout: {format(ps2['kWout'])} kW")
    # print(f"RatioRenewable: {format(ps2['RatioRenewable'])}")
    pws = PowerStation(ps2['kWout'], ps2['RatioRenewable'])
    print(pws.kWout)
    print(pws.RatioRenewable)
    
    ps2['SourcesIndex']
    # ps2[4]
    for item in ps2['SourcesIndex']:
        # print(f"GasIndex: {format(item['Gas'])}")
        # print(f"SolarIndex: {format(item['Solar'])}")
        # print(f"ImportsIndex: {format(item['Imports'])}")
        # print(f"GSIndex: {format(item['GridStorage'])}")
        si = SourcesIndex(item['Gas'], item['Solar'], item['Imports'], item['GridStorage'])
        print(si.Gas)
        print(si.Solar)
        print(si.Imports)
        print(si.GridStorage)


#parse Weather1.json
with open('Weather1.json') as wt:
    
    wt1 = json.load(wt)

    wt2 = wt1['weather']
    
    # print(f"temp: {format(wt2['temperature'])}")
    # print(f"heatindex: {format(wt2['heatindex'])}")
    # print(f"sunlight: {format(wt2['sunlight'])}")
    # print(f"humidity: {format(wt2['humidity'])}")
    # print(f"wind: {format(wt2['wind'])}")

    wth = Weather(wt2['temperature'],wt2['heatindex'],wt2['sunlight'],wt2['humidity'],wt2['wind'])
    print(wth.temperature)
    print(wth.heatindex)
    print(wth.sunlight)
    print(wth.humidity)
    print(wth.wind)


#parse Utilities1.json
with open('Utilities1.json') as u:

    u1 = json.load(u)

    u2 = u1['utilities']

    # print(f"kWin: {format(u2['kWin'])}")

    uti = Utilities(u2['kWin'])
    print(uti.kWin)


#parse House1.json
with open('House1.json') as ho:

    ho1 = json.load(ho)

    ho2 = ho1['house']

    ho2['kWin']
    for houseitem in ho2['kWin']:
        # print(f"aircon: {format(houseitem['aircon'])} kW")
        # print(f"lighting: {format(houseitem['lighting'])} kW")
        # print(f"kitchen: {format(houseitem['kitchen'])} kW")
        # print(f"multiplug: {format(houseitem['multiplug'])} kW")
        # print(f"miscellaneous: {format(houseitem['miscellaneous'])} kW")
        hi = House(houseitem['aircon'],houseitem['lighting'],houseitem['kitchen'],houseitem['multiplug'],houseitem['miscellaneous'])
        print(hi.aircon)
        print(hi.lighting)
        print(hi.kitchen)
        print(hi.multiplug)
        print(hi.miscellaneous)



