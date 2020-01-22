#using a helper methods to pass to all controllers. these methods inherits from application controller 
#skip before action/ verify token prevents rails built in method authenticity token to prevent our action controllers from working
#we are creating a session or deleting it, or we are authorizing a User based on the session data. 
#These methods will be helpful when dealing with the sessions controller. 

class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!
  
    def login!
      session[:user_id] = @user.id
    end
  
    def logged_in?
      !!session[:user_id]
    end
  
    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
  
    def authorized_user?
       @user == current_user
     end
 
     def logout!
       session.clear
     end
  
    end
