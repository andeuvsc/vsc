name_list = []

with open('liste.txt', 'a+', encoding='utf-8') as file:
    file.seek(0)  # Setzt den Pointer auf ersten Eintrag
    name_list = [line.rstrip() for line in file]
    """ for line in file:
        line = line.strip()
        name_list.append(line) """
    file.close()

def print_name(name):
    if name in name_list:
        print(name, ' schon in der Liste: ')
        name_list.sort()
    else:
        print(name, ' wird zur Liste hinzugefügt')
        name_list.append(name)
        name_list.sort()

while True:
    vorname = input('\n--- Namensliste bearbeiten ---\n\t[q=quit], \n\t[l=Listenausgabe] \n\t[s=speichern]\
                      \n\t[d=Namen löschen]\n\t[sonst=Listeneintrag]\n\tEingabe >> ').capitalize()
    if vorname =='Q':
        break
    elif vorname == 'L':
        print('\n--- Namensliste ---\n', name_list)
    elif vorname == 'S':
        with open('liste.txt', 'w+', encoding='utf-8') as file:
            file.write('\n'.join(name_list))
        file.close()
    elif vorname == 'D':
        print('--- Namensliste ---')
        print(name_list)
        del_name = input('Welcher Name soll gelöscht werden?').capitalize()
        if del_name in name_list:
            name_list.remove(del_name)
        continue
    else:
        print_name(vorname)