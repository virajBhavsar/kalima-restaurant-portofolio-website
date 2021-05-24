k = 6
q = 6
x = [[1,0,1,1,0,1],[1,0,1,1,1,0],[1,0,0,1,1,0],[1,0,0,0,1,0],[1,0,0,0,0,0],[1,1,1,0,0,0]]
c = 0
segspart = []
segs = []
for i in range(k):
    for j in range(q):
        if x[i][j] == 1:
            segspart.append([i,j])
            c = c + 1 

print(segspart)

print(len(segspart))
        
for i in range(len(segspart)):
    for j in range(2):
        if segspart[i][0] == segspart[i][1]:
            segs.append([])

