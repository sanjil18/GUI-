   M S B A M L   `   `   `  ����B  >Gui end, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:Gui_endGui_end  5   	       Gui_end.HomePage   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   'localclr-namespace:Gui_end     5   	     � Title$
  Home��5   	   $	��900��6   $	��900��6#    � WindowStartupLocation$ CenterScreen=�5   	    � 
ResizeMode$ 	CanResize=�6.   ���#F5F5F5 � 	Resources 5	         ModernButton �� 
TargetType �� Property �� Value3  -System.Windows.Media.Effects.DropShadowEffect   Color   
BlurRadius	   Opacity
 �� 
TargetType �� CornerRadius �� Padding �� Triggers P� Property P� Value&   System.Windows.Controls.DataGrid��%�  &	        '  �    �� 5   
   " ��6%   .�5      ��  � ��$ 16(�6)   �� 5       � ��$
 Bold"�6+   �� 5       � ��
 �����6+   �� 5       � �� �#4CAF506+   �� 5       � ��$
 10,5q�6(   �� 5       � ��$	 160��6&   �� 5       � ��$ 45��6'   �� 5       � ��$ 0q�60   �� 5       �@�Cursor$
 Hand��6'   �� 5       � ��$ 10q�6'   �� 5       �@J�Effect 5        5      $ Black��6'   $ 10Q�65   $		 0.5Q�6E   5      �� 5       � �� 5      �� 5      "
 ��6&   .R�5      �� #��z��6!   $ 20��5    !   $ 5q�5!   !   ._�5"      �� $��Center=�6/   $��Center=�6L   5#      5$      5&       5(      P� 5)       �@J�IsMouseOver$
 True��61   . �5*      ��  � �� �#388E3C63   5+      P� 5,       � ��$
 True��6/   . �5-      ��  � �� �#1B5E2063   5.      50      �� 53   
   "  6   .�54      ��  � ��
 �����6+   �� 55       �@ RowBackground
 �����6.   �� 56        �@ AlternatingRowBackground �#F0F0F069   �� 57       � ��
 �����6,   �� 58       � ��$ 1q�60   59      5:      .��5<      � $��20q�6   .+�5>   
      Gui_end.Header  $��Stretch=�6   $	��Top=�65   � 5C   
   $	��Top=�6   $��	0,120,0,0q�6'   .+�5D      �� $ 10q�6   
�������
�������$��1q�6M   $ 10��6a    J� Effect 5E        5F      $ Black��6'   $ 8Q�65   $		 0.3Q�6D   ._�5I        -   5        $��SeatDetailsGrid��5I         AutoGenerateColumns$ False��62      
IsReadOnly$
 True��6N   $��Stretch=�5K      $	��400��69   $
��Auto��6F      Columns 5L      0  *System.Windows.Controls.DataGridTextColumn  5M      ,  &System.Windows.Controls.DataGridColumn   Header$ Seat No��6-      Width5  /System.Windows.Controls.DataGridLengthConverter$ * 6Z   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6>   �� *	seatsNo+6Z     5N      $ 
Time Limit��6-   $ * 6_    6A   �� *	TimeLimit+6_     5O      $ 
Student ID��6-   $ * 6e    6A   �� *StudentIdFORSMS+6e   5Q      5R      5S      �� 5V   
    �� Orientation$ 
Horizontal=�6   $��Center=�6.   $��	0,550,0,0q�6K   .+�5W      �� -   5        #��[  5W      $��	Book Seat��6;   6O   �� 5X      -   5        #��[  5X      $��Delete Seat��6;   
���  ��6b   �� 5Y      -   5        #��[  5Y      $��Log Out��6;   
�������6_   5Z         Gui_end.Footer  5]   
   $��Stretch=�6   $��Bottom=�65   5^      5_      