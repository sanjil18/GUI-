   M S B A M L   `   `   `  ����B  >Gui end, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:Gui_endGui_end  5   	       Gui_end.HomePage   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   'localclr-namespace:Gui_end     5   	     � Title$
  Home��5   	   $	��900��6   $	��900��6#    � WindowStartupLocation$ CenterScreen=�5   	    � 
ResizeMode$ 	CanResize=�5   	    � WindowStyle$ SingleBorderWindow=�5   	    � AllowsTransparency$ False��5	   	   
������� � 	Resources 5         ModernButton �� 
TargetType �� Property �� Value3  -System.Windows.Media.Effects.DropShadowEffect	   Color
   
BlurRadius   Opacity �� 
TargetType �� CornerRadius �� Padding �� Triggers P� Property P� Value&   System.Windows.Controls.DataGrid��%�  &	        '  �    �� 5   
   " ��6%   .�5      ��  � ��$ 16(�6)   �� 5       � ��$
 Bold"�6+   �� 5       � ��
 �����6+   �� 5       � �� �#4CAF506+   �� 5       � ��$
 10,5q�6(   �� 5       � ��$	 160��6&   �� 5       � ��$ 45��6'   �� 5       � ��$ 0q�60   �� 5       �@�Cursor$
 Hand��6'   �� 5       � ��$ 10q�6'   �� 5       �@J�Effect 5        5      $	 Black��6'   $
 10Q�65   $	 0.5Q�6E   5      �� 5        � �� 5!      �� 5"      " ��6&   .R�5#      �� #��z��6!   $ 20��5$   !   $ 5q�5%   !   ._�5&      �� $��Center=�6/   $��Center=�6L   5'      5(      5*       5,      P� 5-       �@J�IsMouseOver$
 True��61   . �5.      ��  � �� �#388E3C63   5/      P� 50       � ��$
 True��6/   . �51      ��  � �� �#1B5E2063   52      54      �� 57   
   "  6   .�58      ��  � ��
 �����6+   �� 59       �@ RowBackground
 �����6.   �� 5:        �@ AlternatingRowBackground �#F0F0F069   �� 5;       � ��
 �����6,   �� 5<       � ��$ 1q�60   5=      5>      .��5@      � $��20q�6   .+�5B   
      Gui_end.Header  $��Stretch=�6   $	��Top=�65   �� 5E   
   $��Booked Seats List��6   $��24(�6,   $
��Bold"�6:   $��Center=�6L   ���#333$��	0,80,0,10q�5F   "   �� 5I   
   $��1��6   $ 10q�6   
�������
�������$��1q�6V   $ 10��6j    J� Effect 5J        5K      $	 Black��6#   $
 8Q�61   $	 0.3Q�6@   ._�5N        -   5        $��SeatDetailsGrid��5N         AutoGenerateColumns$ False��6.      
IsReadOnly$
 True��6J   $��	0,120,0,0q�5O   K   $��Stretch=�5P      $	��Top=�65   $	��400��5Q      $
��Auto��6$      Columns 5R      0  *System.Windows.Controls.DataGridTextColumn  5S      ,  &System.Windows.Controls.DataGridColumn   Header$ Seat No��6)      Width5  /System.Windows.Controls.DataGridLengthConverter$ * 6V   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6:   �� *	seatsNo+6V     5T      $ 
Time Limit��6)   $ * 6[    6=   �� *	TimeLimit+6[     5U      $ 
Student ID��6)   $ * 6a    6=   �� *StudentIdFORSMS+6a   5W      5X      �� 5[   
    �� Orientation$ 
Horizontal=�6   $��Center=�6.   $��0,20,0,0q�6K   .+�5\      �� -   5        #��[  5\      $��	Book Seat��6;   6O   �� 5]      -   5        #��[  5]      $��Delete Seat��6;   
���  ��6b   �� 5^      -   5        #��[  5^      $��Log Out��6;   
�������6_   5_         Gui_end.Footer  5b   
   $��Stretch=�6   $��Bottom=�65   5c      5d      