const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (message === 'hi') resolve('Welcome to our chat support!');
        else resolve('I dont understand  "' + message + '"');
      }, 2000);
    });
  },
};

export default API;
