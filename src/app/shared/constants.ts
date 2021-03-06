import { HttpHeaders } from '@angular/common/http';

export const httpPostOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
        })
};

export const apiBaseUrl = '/api';
