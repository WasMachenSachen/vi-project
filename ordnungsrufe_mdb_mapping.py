import numpy as np
import pandas as pd
from datetime import date

mdb = pd.read_excel('bundestag-personen.xlsx').to_numpy()
speaker = pd.read_excel('speaker.xlsx').to_numpy()


for i in range(len(speaker)):
    for x in range(len(mdb)):
        if (str(mdb[x][0]) in str(speaker[i][1]) and date.fromisoformat(str(mdb[x][2])) < date.fromisoformat(str(speaker[i][0])) < date.fromisoformat(str(mdb[x][3]))):
            print(speaker[i][1] + " wird zu " + mdb[x][1])
            speaker[i][1] = mdb[x][1]

print(speaker)
pd.DataFrame(speaker).to_csv("foo.csv")