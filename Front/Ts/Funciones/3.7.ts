const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T1 ,T2>(item:T1, collection:T2[]): T2[] {
    collection.push(item as any);
    return <T2[]>collection;
}

 // Anadir algunas cosas a las colecciones
 pushToCollection<boolean,string>(false, stringCollection);
 pushToCollection<string,string>('hi', stringCollection);
 pushToCollection<string[],string>([], stringCollection);
 
 pushToCollection<string,number>('1', numberCollection);
 pushToCollection<string,number>('2', numberCollection);
 pushToCollection<string,number>('3', numberCollection);
 
const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);