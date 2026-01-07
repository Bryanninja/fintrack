import { ChevronDownIcon, LogOutIcon } from 'lucide-react';

import Logo from '@/assets/images/Logo.svg';
import { useAuthContext } from '@/contexts/auth';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import { Card, CardContent } from './card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

const Header = () => {
  const { user, signOut } = useAuthContext();
  return (
    <Card>
      <CardContent className="flex items-center justify-between rounded-none px-8 py-6">
        <div>
          <img src={Logo} alt="Fintrack brand logo" />
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="space-x-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm">
                  {user.firstName} {user.lastName}
                </p>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Meu perfil</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  onClick={signOut}
                  variant="ghost"
                  size="small"
                  className="w-full justify-start"
                >
                  <LogOutIcon />
                  Sair
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
