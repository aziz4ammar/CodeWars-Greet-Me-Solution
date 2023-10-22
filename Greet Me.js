function greet(name) {
    // Capitalize the first letter of the name and make the rest of the name lowercase
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
    // Return the customized greeting without the comma and space
    return 'Hello ' + capitalizedName + '!';
  }  