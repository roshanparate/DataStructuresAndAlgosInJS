class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash = 0;
    for(let i=0;i<key.length;i++){
      hash = (hash + key.charCodeAt(i)*i) % this.data.length;
    }
    return hash;
  }//O(1)

  set(key,value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }//O(1)

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i =0; i < currentBucket.length;i++){
        if(currentBucket[i][0]=== key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys(){
    let tableKeys = [];
    for(let i =0;i<this.data.length;i++){
      if(this.data[i]){
        tableKeys.push(this.data[i][0][0]);
      }
    }
    return tableKeys;
  }

  keysInCollision(){
    if(!this.data.length){
      return undefined;
    }

    let tableKeys = [];

    for(let i=0;i<this.data.length;i++){
      if(this.data[i] && this.data[i].length){
        if(this.data[i].length > 1){
          for(let j=0;j<this.data[i].length;j++){
            tableKeys.push(this.data[i][j][0])
          }
        }else{
          tableKeys.push(this.data[i][0][0])
        }
      }
    }
    return tableKeys;
  }
}

const ht = new HashTable(10);
ht.set("John",50);
ht.set("Devid",57);
ht.set("Ram",57);
ht.set("Ram",22);
ht.get("Ram");
ht.keysInCollision();
