const object={
    a:5,
    b:6,
    c:8,
    d:10
};
for( const property in object)
{
    console.log(` ${property} : ${object[property]}`);
}